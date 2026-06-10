<template>
  <div>

    <!-- Hero da seção -->
    <section class="bg-olive-bg py-24">
      <div class="max-w-4xl mx-auto px-6 text-center text-cream/90 mb-16">
        <p class="font-sans text-xs tracking-[0.3em] uppercase text-cream/60 mb-4">Especialidades</p>
        <h2 class="font-serif text-4xl md:text-5xl font-light">Como posso ajudar</h2>
      </div>

      <div class="max-w-4xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        <div
          v-for="area in areas"
          :key="area.title"
          class="bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-sm p-8 flex flex-col gap-4"
        >
          <h3 class="font-sans text-2xl text-cream font-light">{{ area.title }}</h3>
          <div class="w-8 h-px bg-cream/40"></div>
          <p class="font-sans text-cream/80 leading-relaxed text-md">{{ area.description }}</p>
        </div>
      </div>
    </section>

    <!-- Seção: Sintomas e desafios -->
    <section class="py-20 bg-cream">
      <div class="max-w-4xl mx-auto px-6">
        <div class="text-center mb-14">
          <p class="font-sans text-xs tracking-[0.3em] uppercase text-brown-mid mb-4">Para quem é</p>
          <h2 class="section-title">Você pode se beneficiar da terapia se...</h2>
        </div>

        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="item in sintomas"
            :key="item"
            class="bg-beige rounded-sm p-6 font-sans text-brown-dark text-base text-center leading-relaxed"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Áreas | Psicóloga Mariana Fatur' })

const areas = [
  {
    title: 'Atendimento Individual',
    description:
      'Um espaço de escuta psicanalítica para adultos que buscam compreender suas emoções, desenvolver autoconhecimento e construir mudanças consistentes no modo de viver e se relacionar.',
  },
  {
    title: 'Atendimento para Adolescentes',
    description:
      'Um espaço de escuta e acolhimento para adolescentes que atravessam transformações emocionais, desafios nos relacionamentos, ansiedade, inseguranças e questões de identidade.',
  },
]

const sintomas = [
  'Sente ansiedade ou medo constantes',
  'Repete padrões emocionais que não consegue mudar',
  'Carrega sentimentos de culpa ou tristeza persistente',
  'Tem dificuldade nos relacionamentos',
  'Vivenciou traumas ou perdas',
  'Sente que algo está errado, mas não sabe o quê',
]
</script>
