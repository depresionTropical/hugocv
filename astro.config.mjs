import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://depresionTropical.github.io/hugocv/',
  base: '/hugocv/',
  integrations: [tailwind()],
});
