import {
  defineConfig,
  presetUno,
  presetIcons,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

export default defineConfig({
  presets: [presetUno(), presetIcons()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  shortcuts: {
    "svelte-transition-grid-item": "col-(start-1 end-2) row-(start-1 end-2)",
    "btn": "px-4 py-1 uppercase tracking-widest rounded-lg text-sm"
  },
})