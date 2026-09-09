import { site, type ExperimentVariant } from '../content/site';
import { buildWhatsappUrl } from '../lib/whatsapp';
import { trackMarketingEvent } from './analytics';

const storageKey = 'nuvi_conversion_variant';
const dialogSelector = '#lead-dialog';
const formSelector = '#lead-form';

function chooseVariant(): ExperimentVariant {
	try {
		const savedVariant = window.localStorage.getItem(storageKey);
		if (savedVariant === 'direct' || savedVariant === 'form') {
			return savedVariant;
		}

		const variant: ExperimentVariant = Math.random() < 0.5 ? 'direct' : 'form';
		window.localStorage.setItem(storageKey, variant);
		return variant;
	} catch {
		return 'direct';
	}
}

function formMessage(formData: FormData): string {
	const labels = site.form.whatsappLabels;
	const line = (label: string, field: string) =>
		`${label}: ${String(formData.get(field) ?? '').trim()}`;

	return [
		site.form.whatsappIntro,
		'',
		line(labels.name, 'name'),
		line(labels.business, 'business'),
		line(labels.city, 'city'),
		line(labels.teamSize, 'teamSize'),
	].join('\n');
}

// A blocked popup must not become a dead end: the visitor already asked to talk.
function openWhatsapp(url: string): void {
	const opened = window.open(url, '_blank', 'noopener,noreferrer');
	if (!opened) window.location.href = url;
}

export function initConversionExperiment(): void {
	const variant = chooseVariant();
	const dialog = document.querySelector<HTMLDialogElement>(dialogSelector);
	const form = document.querySelector<HTMLFormElement>(formSelector);

	document.documentElement.dataset.experimentVariant = variant;
	trackMarketingEvent({ name: 'variant_assigned', variant });

	document.querySelectorAll<HTMLAnchorElement>('[data-conversion-cta]').forEach((cta) => {
		cta.addEventListener('click', (event) => {
			const location = cta.dataset.location ?? 'unknown';
			trackMarketingEvent({ name: 'cta_clicked', variant, location });

			if (variant === 'form' && dialog) {
				event.preventDefault();
				dialog.showModal();
				trackMarketingEvent({ name: 'form_started', variant, location });
			} else {
				trackMarketingEvent({ name: 'whatsapp_opened', variant, location });
			}
		});
	});

	document.querySelectorAll<HTMLAnchorElement>('[data-demo-scroll]').forEach((link) => {
		link.addEventListener('click', () => {
			trackMarketingEvent({
				name: 'demo_scroll_clicked',
				variant,
				location: link.dataset.location ?? 'unknown',
			});
		});
	});

	form?.addEventListener('submit', (event) => {
		event.preventDefault();
		if (!form.reportValidity()) return;

		const whatsappUrl = buildWhatsappUrl(formMessage(new FormData(form)));
		trackMarketingEvent({ name: 'form_submitted', variant, location: 'lead_dialog' });
		trackMarketingEvent({ name: 'whatsapp_opened', variant, location: 'lead_dialog' });
		dialog?.close();
		openWhatsapp(whatsappUrl);
	});

	dialog?.addEventListener('click', (event) => {
		if (event.target === dialog) dialog.close();
	});

	document.querySelectorAll<HTMLElement>('[data-close-dialog]').forEach((button) => {
		button.addEventListener('click', () => dialog?.close());
	});
}

initConversionExperiment();
