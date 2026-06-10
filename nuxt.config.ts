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
          content:
            'Mariana Fatur — Psicóloga | CRP: 07/21477. Atendimento online via psicanálise para jovens e adultos em todo o Brasil.',
        },
        { property: 'og:title', content: 'Mariana Fatur | Psicóloga' },
        {
          property: 'og:description',
          content: 'Atendimento online via psicanálise. Descubra uma vida mais saudável através da psicoterapia.',
        },
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
      routes: ['/', '/sobre', '/areas', '/abordagem', '/contato'],
    },
  },
})
