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
      colors: {
        cream:        '#F7F3EC',
        beige:        '#EDE8DC',
        'brown-dark': '#2C1810',
        brown:        '#7B4F2E',
        'brown-mid':  '#A0724A',
        'brown-light':'#C9A882',
        olive:        '#7A8B65',
        'olive-light':'#8C9E78',
        'olive-dark': '#5C6B4E',
        'olive-bg':   '#8A9474',
      },
      fontFamily: {
        script: ['Dancing Script', 'cursive'],
        serif:  ['Cormorant Garamond', 'Georgia', 'serif'],
        sans:   ['Lato', 'system-ui', 'sans-serif'],
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
