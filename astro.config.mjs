import { defineConfig } from 'astro/config';
import image from '@astrojs/image';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
    site: 'https://www.masamicooks.com',
    integrations: [
      tailwind(), 
      sitemap(),
      image({
        serviceEntryPoint: '@astrojs/image/sharp'
      }),
    ],
    'process.env.CONTENTFUL_SPACE_ID': JSON.stringify(process.env.CONTENTFUL_SPACE_ID),
    'process.env.CONTENTFUL_DELIVERY_TOKEN': JSON.stringify(process.env.CONTENTFUL_DELIVERY_TOKEN),
    'process.env.CONTENTFUL_PREVIEW_TOKEN': JSON.stringify(process.env.CONTENTFUL_PREVIEW_TOKEN),
});
