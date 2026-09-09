/*
 * El contenido se sirve visible. Este script es el único que lo esconde, y solo cuando
 * puede volver a mostrarlo: si no hay IntersectionObserver, o el visitante pidió menos
 * movimiento, la página queda quieta y completa.
 */
export function initReveal(): void {
	const targets = document.querySelectorAll<HTMLElement>('[data-reveal]');
	if (targets.length === 0) return;

	const prefersReducedMotion = window.matchMedia(
		'(prefers-reduced-motion: reduce)',
	).matches;
	if (prefersReducedMotion || !('IntersectionObserver' in window)) return;

	targets.forEach((target) => {
		target.dataset.reveal = 'hidden';
	});

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (!entry.isIntersecting) return;
				(entry.target as HTMLElement).dataset.reveal = 'shown';
				observer.unobserve(entry.target);
			});
		},
		{ rootMargin: '0px 0px -12% 0px', threshold: 0.1 },
	);

	targets.forEach((target) => observer.observe(target));
}

initReveal();
