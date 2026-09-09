export type MarketingEventName =
	| 'variant_assigned'
	| 'cta_clicked'
	| 'demo_scroll_clicked'
	| 'form_started'
	| 'form_submitted'
	| 'whatsapp_opened';

export interface MarketingEvent {
	name: MarketingEventName;
	variant: 'direct' | 'form';
	location?: string;
	at: number;
}

declare global {
	interface Window {
		nuviEvents?: MarketingEvent[];
	}

	interface WindowEventMap {
		'nuvi:marketing': CustomEvent<MarketingEvent>;
	}
}

// The queue survives until a provider is wired, so events fired before the
// analytics snippet loads are not lost.
export function trackMarketingEvent(event: Omit<MarketingEvent, 'at'>): void {
	const payload: MarketingEvent = { ...event, at: Date.now() };

	window.nuviEvents ??= [];
	window.nuviEvents.push(payload);
	window.dispatchEvent(
		new CustomEvent<MarketingEvent>('nuvi:marketing', { detail: payload }),
	);
}
