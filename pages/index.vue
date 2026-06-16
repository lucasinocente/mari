<template>
  <div>

    <!-- ── HERO ─────────────────────────────────────────────────────────── -->
    <section class="min-h-[calc(100vh-73px)] flex items-center">
      <div class="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        <!-- Nome mobile -->
        <div class="md:hidden text-center">
          <h1 class="font-script text-6xl text-brown leading-tight">Mariana Fatur</h1>
          <p class="font-sans text-sm tracking-[0.25em] uppercase text-brown-mid mt-2">
            Psicóloga &nbsp;|&nbsp; CRP: 07/21477
          </p>
        </div>
        <div class="md:hidden mx-auto w-12 h-px bg-brown-light"></div>

        <!-- Foto -->
        <div class="flex justify-center md:justify-start relative">
          <div
            class="absolute inset-0 m-6 rounded-[50%_10%_30%_20%/20%_10%_40%_20%] bg-olive/20"
            style="transform: rotate(-5deg);"
          ></div>
          <img
            :src="assetUrl('/images/mariana-black.jpg')"
            alt="Mariana Fatur"
            class="relative z-10 w-full max-w-sm md:max-w-md object-cover rounded-[60%_50%_30%_70%/60%_20%_20%_80%] shadow-lg"
          />
        </div>

        <!-- Conteúdo -->
        <div class="flex flex-col gap-6">
          <div class="hidden md:block">
            <h1 class="font-script text-6xl md:text-7xl text-brown leading-tight">Mariana Fatur</h1>
            <p class="font-sans text-sm tracking-[0.25em] uppercase text-brown-mid mt-2">
              Psicóloga &nbsp;|&nbsp; CRP: 07/21477
            </p>
          </div>
          <div class="hidden md:block w-12 h-px bg-brown-light"></div>

          <p class="font-serif text-xl italic text-brown leading-relaxed">
            Descubra uma vida mais saudável através da psicoterapia
          </p>

          <div class="font-sans text-brown-dark/80 leading-[2] text-base max-w-md space-y-4">
            <p>
              A terapia é um convite para olhar com mais profundidade para si mesmo,
              buscando compreender melhor seus pensamentos, emoções e interações.
              Também tem como objetivo desenvolver novos recursos emocionais e comportamentais,
              analisar profundamente padrões que se repetem e construir formas mais saudáveis
              de se relacionar consigo, com os outros e com a vida, promovendo maior bem-estar
              e mais qualidade de vida.
            </p>
          </div>

          <div class="mt-2">
            <a
              href="https://wa.me/5551981969035?text=Ol%C3%A1%2C+gostaria+de+agendar+meu+primeiro+encontro!"
              target="_blank"
              rel="noopener noreferrer"
              class="btn-outline inline-flex items-center gap-3"
            >
              <span>→</span>
              <span>Quero agendar meu primeiro encontro</span>
            </a>
          </div>
        </div>

      </div>
    </section>

    <!-- ── FINALIDADES ───────────────────────────────────────────────────── -->
    <section class="py-20 bg-cream">
      <div class="max-w-4xl mx-auto px-6">
        <h2 class="font-serif text-2xl md:text-3xl text-brown-dark font-light mb-10">
          Algumas das principais finalidades são:
        </h2>
        <ul class="space-y-4">
          <li
            v-for="item in finalidades"
            :key="item"
            class="flex items-start gap-3 font-sans text-brown-dark/80 text-base leading-relaxed"
          >
            <span class="mt-2 w-1.5 h-1.5 rounded-full bg-brown flex-shrink-0"></span>
            {{ item }}
          </li>
        </ul>
      </div>
    </section>

    <!-- ── AMBIENTE ──────────────────────────────────────────────────────── -->
    <section class="py-16 bg-olive-bg">
      <div class="max-w-3xl mx-auto px-6 text-center space-y-6">
        <p class="font-sans text-cream/90 text-base leading-relaxed">
          O ambiente da terapia é o local para você se sentir escutado e validado,
          com confiança, privacidade e acolhimento.
        </p>
        <p class="font-sans text-cream/90 text-base leading-relaxed">
          Você precisa se sentir à vontade para falar de suas questões pessoais
          com sigilo, privacidade, neutralidade e respeito.
        </p>
      </div>
    </section>

    <!-- ── QUOTE ─────────────────────────────────────────────────────────── -->
    <section class="py-16 bg-cream text-center">
      <p class="font-serif italic text-brown text-xl md:text-2xl">
        Se você chegou até aqui, talvez seja a hora de começar...
      </p>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Mariana Fatur | Psicóloga' })
const assetUrl = useAssetUrl()

const finalidades = [
  'Lidar com ansiedade, estresse, depressão e traumas decorrentes de experiências difíceis, medos, fobias e bloqueios emocionais;',
  'Enfrentar momentos difíceis, como luto, separação, rejeição, doenças, desemprego, etc.;',
  'Melhorar relacionamentos familiares, afetivos e profissionais;',
  'Desenvolver autoconhecimento, identificando padrões de comportamento e emoções;',
  'Fortalecer a autoestima e a autoconfiança;',
  'Aprender estratégias para resolver problemas e tomar decisões ou lidar com mudanças;',
  'Desenvolver habilidades de liderança e comunicação;',
  'Controlar a raiva, a impulsividade ou outras emoções intensas;',
  'Auxiliar no tratamento de transtornos psicológicos, em conjunto com outros profissionais de saúde, quando necessário;',
  'Promover crescimento pessoal, mesmo quando, aparentemente, não se identifica um problema específico.',
]
</script>
