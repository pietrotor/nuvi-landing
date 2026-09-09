import Lenis from 'lenis';

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const precisePointer = window.matchMedia('(hover: hover) and (pointer: fine)');

let lenis: Lenis | undefined;

function updateSmoothScroll(): void {
	const shouldRun = precisePointer.matches && !reducedMotion.matches;

	if (shouldRun && !lenis) {
		lenis = new Lenis({
			autoRaf: true,
			anchors: true,
			lerp: 0.12,
			smoothWheel: true,
			syncTouch: false,
			wheelMultiplier: 0.88,
			overscroll: true,
			stopInertiaOnNavigate: true,
		});
		return;
	}

	if (!shouldRun && lenis) {
		lenis.destroy();
		lenis = undefined;
	}
}

updateSmoothScroll();
reducedMotion.addEventListener('change', updateSmoothScroll);
precisePointer.addEventListener('change', updateSmoothScroll);
