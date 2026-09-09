// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import icon from 'astro-icon';

const DEFAULT_SITE_URL = 'https://nuvi.bo';

/**
 * Astro fails the build on a malformed `site`, so accept a bare host and fall back otherwise.
 * @param {string | undefined} value
 */
function resolveSiteUrl(value) {
	const raw = value?.trim();
	if (!raw) return DEFAULT_SITE_URL;

	const candidate = /^https?:\/\//.test(raw) ? raw : `https://${raw}`;
	if (URL.canParse(candidate)) return candidate;

	console.warn(
		`[config] Ignoring invalid PUBLIC_SITE_URL "${raw}", using ${DEFAULT_SITE_URL}`,
	);
	return DEFAULT_SITE_URL;
}

// https://astro.build/config
export default defineConfig({
	site: resolveSiteUrl(process.env.PUBLIC_SITE_URL),
	integrations: [icon(), sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
