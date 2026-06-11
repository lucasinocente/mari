import type { Config } from 'tailwindcss'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './error.vue',
  ],
  theme: {
    extend: {
      // ── Paleta do Manual de Identidade Visual ──────────────────────────
      colors: {
        // Principal
        cream:        '#fffbf7',  // fundo principal
        brown:        '#634127',  // marrom principal
        olive:        '#8e9470',  // verde-sálvia

        // Secundária
        beige:        '#d8d2c6',  // fundo secundário / muted
        'brown-mid':  '#ae6a39',  // marrom terracota

        // Neutros
        'brown-dark': '#2b2e34',  // grafite — textos longos
        'brown-light':'#c49a6e',  // marrom claro (interpolado)

        // Variações olive
        'olive-light':'#a3a882',
        'olive-dark': '#6a7055',
        'olive-bg':   '#8e9470',

        // Destaque (usar com parcimônia)
        accent:       '#bbcb33',  // verde-limão — botões CTA, destaques
      },

      // ── Tipografia do MIV ──────────────────────────────────────────────
      fontFamily: {
        script: ['Great Vibes', 'cursive'],           // nome, assinatura, citações
        serif:  ['Libre Baskerville', 'Georgia', 'serif'], // títulos principais
        sans:   ['Source Sans 3', 'system-ui', 'sans-serif'], // textos
      },

      fontSize: {
        'xs':      ['0.75rem',  { lineHeight: '1.4' }],
        'sm':      ['0.875rem', { lineHeight: '1.5' }],
        'base':    ['1.25rem',  { lineHeight: '1.6' }],
        'lg':      ['1.375rem', { lineHeight: '1.6' }],
        'xl':      ['1.5rem',   { lineHeight: '1.5' }],
        '2xl':     ['1.75rem',  { lineHeight: '1.4' }],
        '3xl':     ['2.125rem', { lineHeight: '1.3' }],
        '4xl':     ['2.5rem',   { lineHeight: '1.2' }],
        '5xl':     ['3rem',     { lineHeight: '1.1' }],
        'display': ['4.5rem',   { lineHeight: '1.1', letterSpacing: '-0.01em' }],
      },
    },
  },
  plugins: [],
} satisfies Config
