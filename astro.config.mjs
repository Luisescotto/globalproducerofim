import tailwindcss from "@tailwindcss/vite";
// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
	vite: {
    plugins: [tailwindcss()]
  },
  site: 'https://www.globalproducerofim.com',
	i18n: {
		locales: ["en", "es"],
		defaultLocale: "en",
		routing:{
			prefixDefaultLocale: false,
		}
	},
  integrations: [icon()],
	experimental: {
		svg: {
			mode: "sprite",
		},
	},
	
	output: 'server',
  	adapter: vercel(),
	trailingSlash: 'never',
});