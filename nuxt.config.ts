// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxtjs/tailwindcss'],

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://marianafatur.com.br/',
  },

  app: {
    // Se o repositório não for username.github.io, troque pelo nome do repo:
    baseURL: '/',
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
        { property: 'og:url',         content: 'https://marianafatur.com.br/' },
        { property: 'og:title',       content: 'Mariana Fatur | Psicóloga' },
        { property: 'og:description', content: 'Atendimento online via psicanálise. Descubra uma vida mais saudável através da psicoterapia.' },
        { property: 'og:image',       content: 'https://marianafatur.com.br/images/mariana-red.jpg' },
        { property: 'og:locale',      content: 'pt_BR' },
        { property: 'og:site_name',   content: 'Mariana Fatur — Psicóloga' },
        // Twitter / X Card
        { name: 'twitter:card',        content: 'summary_large_image' },
        { name: 'twitter:title',       content: 'Mariana Fatur | Psicóloga' },
        { name: 'twitter:description', content: 'Atendimento online via psicanálise. Descubra uma vida mais saudável através da psicoterapia.' },
        { name: 'twitter:image',       content: 'https://marianafatur.com.br/images/mariana-red.jpg' },
      ],
      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-WGMXFTHQ');`,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/images/logo-2.png' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Great+Vibes&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Source+Sans+3:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap',
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
