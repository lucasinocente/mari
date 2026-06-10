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
          <h2 class="section-title text-4xl md:text-5xl">O que acontece dentro da sessão</h2>
        </div>

        <!-- Texto de abordagem -->
        <div class="font-sans text-brown-dark/80 leading-[2.2] text-base space-y-6 max-w-2xl mx-auto">
          <p>
            A psicanálise é uma abordagem que trabalha a partir da fala. Você traz o
            que vier — sem necessidade de organizar antes ou encontrar as palavras certas.
          </p>
          <p>
            O processo busca compreender o que está por trás do que se sente, pensa e
            repete. Não se trata de dar conselhos ou oferecer soluções imediatas, mas
            de criar um espaço onde seja possível entender a própria história com mais
            clareza.
          </p>
          <p class="font-serif italic text-brown text-xl">
            Com o tempo, o que parecia confuso começa a ganhar contorno.
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

        <!-- CTA -->
        <div class="mt-16 text-center">
          <a
            href="https://wa.me/5551981969035?text=Ol%C3%A1%2C+gostaria+de+saber+mais+sobre+a+abordagem!"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-outline inline-flex items-center gap-3"
          >
            <span>→</span>
            <span>Quero começar minha jornada</span>
          </a>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Abordagem | Psicóloga Mariana Fatur' })

const tabela = [
  {
    label: 'Formato',
    lines: ['100% online via videochamada', 'Todo o Brasil'],
  },
  {
    label: 'Sessões',
    lines: ['Individuais — 50 minutos', 'Frequência semanal'],
  },
  {
    label: 'Início',
    lines: ['Primeiro encontro: conhecer a demanda e combinar o processo'],
  },
]
</script>
