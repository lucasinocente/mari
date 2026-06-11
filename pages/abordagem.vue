<template>
  <div>

    <!-- Nome mobile (só aparece em telas pequenas) -->
    <div class="md:hidden text-center py-10 bg-cream border-b border-beige">
      <h1 class="font-script text-5xl text-brown">Mariana Fatur</h1>
      <p class="font-sans text-xs tracking-[0.25em] uppercase text-brown-mid mt-2">Psicóloga &nbsp;|&nbsp; CRP: 07/21477</p>
    </div>

    <section class="py-24 bg-cream">
      <div class="max-w-4xl mx-auto px-6">

        <div class="text-center mb-16">
          <p class="font-sans text-xs tracking-[0.3em] uppercase text-brown-mid mb-4">Método</p>
          <h2 class="section-title text-4xl md:text-5xl">O que acontece dentro da sessão?</h2>
        </div>

        <!-- Texto de abordagem -->
        <div class="font-sans text-brown-dark/80 leading-[2.2] text-base space-y-6 max-w-2xl mx-auto">
          <p>
            A psicanálise é uma abordagem que trabalha a partir da fala.
          </p>
          <p>
            O paciente aborda o assunto que deseja, sem ter necessidade de organizar suas
            idéias ou a forma "correta" para expressá-las. É o próprio processo que busca
            compreender o que está por trás do que é sentido, pensado e falado.
          </p>
          <p>
            Não cabe ao terapeuta "dar conselhos" ou oferecer soluções práticas e imediatas,
            mas criar um espaço onde, através da utilização de técnicas psicológicas adequadas,
            o paciente possa entender a sua própria história com mais clareza, reestruturando
            pensamentos e comportamentos disfuncionais e encontrando as soluções e
            esclarecimentos necessários à plena resolução de suas demandas. O que antes
            parecia confuso e irreversível, "sem saída", agora começa a ganhar novos
            contornos e possibilidades.
          </p>
        </div>

        <!-- Tabela de informações -->
        <div class="mt-16 border border-brown-light/30 rounded-sm overflow-hidden">
          <!-- Desktop: 3 colunas lado a lado -->
          <div class="hidden md:grid md:grid-cols-3 divide-x divide-brown-light/30">
            <div v-for="col in tabela" :key="col.label" class="flex flex-col">
              <div class="bg-beige px-6 py-4 border-b border-brown-light/30">
                <p class="font-sans text-xs tracking-[0.2em] uppercase text-brown">{{ col.label }}</p>
              </div>
              <div class="px-6 py-6">
                <p
                  v-for="line in col.lines"
                  :key="line"
                  class="font-sans text-brown-dark text-base leading-relaxed"
                >
                  {{ line }}
                </p>
              </div>
            </div>
          </div>

          <!-- Mobile: linhas empilhadas -->
          <div class="md:hidden divide-y divide-brown-light/30">
            <div v-for="col in tabela" :key="col.label" class="flex items-baseline gap-4 px-5 py-4">
              <p class="font-sans text-xs tracking-[0.2em] uppercase text-brown w-20 flex-shrink-0">
                {{ col.label }}
              </p>
              <div>
                <p
                  v-for="line in col.lines"
                  :key="line"
                  class="font-sans text-brown-dark text-base leading-relaxed"
                >
                  {{ line }}
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- ── O QUE ESPERAR DA TERAPIA ────────────────────────────────────────── -->
    <section class="py-24 bg-olive-bg">
      <div class="max-w-4xl mx-auto px-6">

        <h2 class="font-serif text-3xl md:text-4xl text-cream font-light text-center mb-14">
          O que você pode esperar da terapia?
        </h2>

        <div class="grid sm:grid-cols-2 gap-6">
          <div
            v-for="card in beneficios"
            :key="card.title"
            class="bg-cream rounded-xl p-8 flex flex-col gap-4"
          >
            <!-- Ícone -->
            <div class="text-brown-mid" v-html="card.icon"></div>
            <h3 class="font-sans font-semibold text-brown-dark text-base">{{ card.title }}</h3>
            <p class="font-sans text-brown-dark/70 text-base leading-relaxed">{{ card.desc }}</p>
          </div>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Abordagem | Psicóloga Mariana Fatur' })

const beneficios = [
  {
    title: 'Conforto e privacidade',
    desc: 'Faça suas sessões do conforto da sua casa, em um ambiente familiar e seguro.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>`,
  },
  {
    title: 'Sem deslocamento',
    desc: 'Atendimento sem necessidade de deslocamento, economizando tempo e energia.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
  },
  {
    title: 'Flexibilidade',
    desc: 'Flexibilidade para conciliar terapia e outras responsabilidades do dia a dia.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>`,
  },
  {
    title: 'Continuidade',
    desc: 'Continuidade do processo, mesmo em rotinas intensas ou durante viagens.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.868V15.13a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/></svg>`,
  },
  {
    title: 'Sigilo Garantido',
    desc: 'Ambiente sigiloso e acolhedor, com total confidencialidade das sessões.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
  },
  {
    title: 'Vínculo Terapêutico',
    desc: 'Construção de uma relação de confiança e presença, mesmo à distância.',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`,
  },
]

const tabela = [
  {
    label: 'Formato',
    lines: ['100% on-line, por vídeochamada, através de plataformas selecionadas.'],
  },
  {
    label: 'Sessões',
    lines: ['Semanais, com atendimentos individuais de 50 minutos de duração.'],
  },
  {
    label: 'Início',
    lines: ['Primeiro encontro: conhecer a demanda e combinar o processo'],
  },
]
</script>
