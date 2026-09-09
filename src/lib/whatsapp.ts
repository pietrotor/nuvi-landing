import { site } from '../content/site';

export function buildWhatsappUrl(message: string): string {
	const number = site.whatsappNumber.replace(/\D/g, '');
	return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
