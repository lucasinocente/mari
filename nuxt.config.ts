// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  css: ['~/assets/css/main.css'],

  app: {
    // Se o repositório não for username.github.io, troque pelo nome do repo:
    baseURL: '/mari/',
    head: {
      title: 'Mariana Fatur | Psicóloga',
      htmlAttrs: { lang: 'pt-BR' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content: 'Mariana Fatur — Psicóloga | CRP: 07/21477. Atendimento online via psicanálise para jovens e adultos em todo o Brasil.',
        },
        // Open Graph
        { property: 'og:type',        content: 'website' },
        { property: 'og:url',         content: 'https://lucasinocente.github.io/mari/' },
        { property: 'og:title',       content: 'Mariana Fatur | Psicóloga' },
        { property: 'og:description', content: 'Atendimento online via psicanálise. Descubra uma vida mais saudável através da psicoterapia.' },
        { property: 'og:image',       content: 'https://lucasinocente.github.io/mari/images/mariana-red.jpg' },
        { property: 'og:locale',      content: 'pt_BR' },
        { property: 'og:site_name',   content: 'Mariana Fatur — Psicóloga' },
        // Twitter / X Card
        { name: 'twitter:card',        content: 'summary_large_image' },
        { name: 'twitter:title',       content: 'Mariana Fatur | Psicóloga' },
        { name: 'twitter:description', content: 'Atendimento online via psicanálise. Descubra uma vida mais saudável através da psicoterapia.' },
        { name: 'twitter:image',       content: 'https://lucasinocente.github.io/mari/images/mariana-red.jpg' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=Dancing+Script:wght@500;600;700&family=Lato:wght@300;400;700&display=swap',
        },
      ],
    },
  },

  nitro: {
    prerender: {
      routes: ['/', '/sobre', '/areas', '/abordagem', '/contato', '/faq'],
    },
  },
})
