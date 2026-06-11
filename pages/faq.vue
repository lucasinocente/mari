<template>
  <div>

    <!-- Nome mobile -->
    <div class="md:hidden text-center py-10 bg-cream border-b border-beige">
      <h1 class="font-script text-5xl text-brown">Mariana Fatur</h1>
      <p class="font-sans text-xs tracking-[0.25em] uppercase text-brown-mid mt-2">Psicóloga &nbsp;|&nbsp; CRP: 07/21477</p>
    </div>

    <section class="py-24 bg-cream">
      <div class="max-w-3xl mx-auto px-6">

        <div class="text-center mb-16">
          <p class="font-sans text-xs tracking-[0.3em] uppercase text-brown-mid mb-4">Dúvidas frequentes</p>
          <h2 class="section-title text-4xl md:text-5xl">Perguntas frequentes</h2>
        </div>

        <!-- Accordion -->
        <div class="divide-y divide-brown-light/30 border-y border-brown-light/30">
          <div v-for="(item, i) in faqs" :key="i">
            <button
              class="w-full text-left py-6 flex items-start justify-between gap-6 group"
              @click="toggle(i)"
            >
              <span class="font-sans text-sm tracking-[0.15em] uppercase text-brown-dark group-hover:text-brown transition-colors">
                {{ item.question }}
              </span>
              <span class="mt-1 flex-shrink-0 text-brown transition-transform duration-300"
                    :class="openIndex === i ? 'rotate-45' : ''">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 4v16m8-8H4"/>
                </svg>
              </span>
            </button>

            <Transition name="faq">
              <div v-if="openIndex === i" class="pb-6 pr-10">
                <p class="font-sans text-brown-dark/75 leading-relaxed text-base">
                  {{ item.answer }}
                </p>
              </div>
            </Transition>
          </div>
        </div>

        <!-- CTA abaixo do FAQ -->
        <div class="mt-16 text-center">
          <p class="font-serif italic text-brown text-xl mb-6">
            Ainda tem dúvidas? Estou à disposição.
          </p>
          <a
            href="https://wa.me/5551981969035?text=Ol%C3%A1%2C+tenho+uma+d%C3%BAvida+sobre+a+terapia!"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-outline inline-flex items-center gap-3"
          >
            <span>→</span>
            <span>Falar pelo WhatsApp</span>
          </a>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Perguntas Frequentes | Mariana Fatur',
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Como funciona a primeira sessão?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A primeira sessão é um espaço para que possamos nos conhecer, compreender sua demanda e conversar sobre como funciona o processo terapêutico.',
            },
          },
          {
            '@type': 'Question',
            name: 'OS ATENDIMENTOS SÃO PRESENCIAIS OU ONLINE?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Todos os atendimentos são realizados 100% online, com total flexibilidade. Atendo pessoas de qualquer lugar do Brasil e do mundo.',
            },
          },
          {
            '@type': 'Question',
            name: 'QUANTO TEMPO DURA O TRATAMENTO?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'A jornada dura o tempo necessário que você precisar para elaborar suas dores e construir mudanças que se sustentem.',
            },
          },
          {
            '@type': 'Question',
            name: 'ATENDE POR PLANO DE SAÚDE?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Somente particular com nota fiscal para reembolso de convênios.',
            },
          },
        ],
      }),
    },
  ],
})

const openIndex = ref<number | null>(null)
const toggle = (i: number) => {
  openIndex.value = openIndex.value === i ? null : i
}

const faqs = [
  {
    question: 'Como funciona a primeira sessão?',
    answer: 'A primeira sessão é um espaço para que possamos nos conhecer, compreender sua demanda e conversar sobre como funciona o processo terapêutico.',
  },
  {
    question: 'OS ATENDIMENTOS SÃO PRESENCIAIS OU ONLINE?',
    answer: 'Todos os atendimentos são realizados 100% online, com total flexibilidade. Atendo pessoas de qualquer lugar do Brasil e do mundo.'
  },
  {
    question: 'Quanto tempo dura o tratamento?',
    answer: 'A jornada dura o tempo necessário que você precisar para elaborar suas dores e construir mudanças que se sustentem.',
  },
  {
    question: 'Atende por plano de saúde?',
    answer: 'Somente particular com nota fiscal para reembolso de convênios.',
  },
]
</script>

<style scoped>
.faq-enter-active,
.faq-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}
.faq-enter-from,
.faq-leave-to {
  opacity: 0;
  max-height: 0;
}
.faq-enter-to,
.faq-leave-from {
  opacity: 1;
  max-height: 300px;
}
</style>
