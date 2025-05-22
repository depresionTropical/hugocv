import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  base: "/", // usa "/" si vas a servir desde la raíz de Render
});
