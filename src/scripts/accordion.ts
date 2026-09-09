const accordions = Array.from(
	document.querySelectorAll<HTMLDetailsElement>('[data-faq]'),
);
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const activeAnimations = new WeakMap<HTMLDetailsElement, Animation>();

function finish(details: HTMLDetailsElement, open: boolean): void {
	details.open = open;
	details
		.querySelector<HTMLElement>('[data-faq-answer]')
		?.getAnimations()
		.forEach((animation) => animation.cancel());
	details.style.removeProperty('height');
	details.style.removeProperty('overflow');
	details.removeAttribute('data-animating');
	details
		.querySelector<HTMLElement>('summary')
		?.setAttribute('aria-expanded', String(open));
	activeAnimations.delete(details);
}

function toggleAccordion(details: HTMLDetailsElement, open: boolean): void {
	const summary = details.querySelector<HTMLElement>('summary');
	const answer = details.querySelector<HTMLElement>('[data-faq-answer]');
	if (!summary || !answer) return;

	activeAnimations.get(details)?.cancel();
	answer.getAnimations().forEach((animation) => animation.cancel());

	if (reduceMotion) {
		finish(details, open);
		return;
	}

	const startHeight = details.offsetHeight;
	if (open) details.open = true;
	const endHeight = open
		? summary.offsetHeight + answer.offsetHeight
		: summary.offsetHeight;

	details.dataset.animating = open ? 'opening' : 'closing';
	details.style.overflow = 'hidden';
	details.style.height = `${startHeight}px`;

	const animation = details.animate(
		{ height: [`${startHeight}px`, `${endHeight}px`] },
		{
			duration: open ? 340 : 240,
			easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
		},
	);
	activeAnimations.set(details, animation);

	answer.animate(
		open
			? [
					{ opacity: 0, transform: 'translateY(-6px)' },
					{ opacity: 1, transform: 'translateY(0)' },
				]
			: [
					{ opacity: 1, transform: 'translateY(0)' },
					{ opacity: 0, transform: 'translateY(-4px)' },
				],
		{
			duration: open ? 280 : 160,
			easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
			fill: 'both',
		},
	);

	animation.addEventListener('finish', () => finish(details, open), { once: true });
	animation.addEventListener(
		'cancel',
		() => {
			details.style.removeProperty('height');
			details.style.removeProperty('overflow');
		},
		{ once: true },
	);
}

accordions.forEach((details) => {
	const summary = details.querySelector<HTMLElement>('summary');
	summary?.setAttribute('aria-expanded', String(details.open));

	summary?.addEventListener('click', (event) => {
		event.preventDefault();
		const willOpen =
			details.dataset.animating === 'closing' ||
			(!details.open && details.dataset.animating !== 'opening');

		if (willOpen) {
			accordions.forEach((other) => {
				if (other !== details && other.open) toggleAccordion(other, false);
			});
		}

		toggleAccordion(details, willOpen);
	});
});
