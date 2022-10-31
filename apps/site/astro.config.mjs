import { defineConfig } from 'astro/config'
import svelte from "@astrojs/svelte"
// import UnoCss from 'unocss/astro'
import UnoCss from 'unocss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [
    svelte(),
    // UnoCss(),
  ],
  vite: {
    build: {
      cssCodeSplit: true,
    },
    plugins: [UnoCss()],
  }
})