import adapter from '@sveltejs/adapter-auto';
import { relative, sep } from 'node:path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	compilerOptions: {
		// defaults to rune mode for the project, execept for `node_modules`. Can be removed in svelte 6.
		runes: ({ filename }) => {
			const relativePath = relative(import.meta.dirname, filename);
			const pathSegments = relativePath.toLowerCase().split(sep);
			const isExternalLibrary = pathSegments.includes('node_modules');

			return isExternalLibrary ? undefined : true;
		}
	},
	kit: {
		adapter: adapter(),
		prerender: {
			entries: ['*'],
			crawl: true
		},
		csp: {
			mode: 'auto',
			directives: {
				'default-src': ['self'],
				'font-src': ['self', 'https://fonts.gstatic.com'],
				'style-src': ['self', 'unsafe-inline', 'https://fonts.googleapis.com'],
				'img-src': ['self', 'data:', 'https://lh3.googleusercontent.com']
			}
		}
	}
};

export default config;
