import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import {sidebar} from './sidebar.ts';

export const locales = {
	root: { label: 'Português do Brasil', lang: 'pt-BR' },
};

const site = 'https://decode.noxian.dev';

export default defineConfig({
	site,
	integrations: [starlight({ title: 'Sitemap' })],
	integrations: [
		starlight({
			title: 'Decode 👨‍💻',
			social: {
				telegram: 'https://t.me/'
			},
			customCss: ['./src/assets/styles/custom.css'],
			locales,
			sidebar: sidebar,
			lastUpdated: true,
		}),
	],
});