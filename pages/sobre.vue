<template>
  <div>

    <!-- Seção: Prazer, sou Mariana Fatur -->
    <section class="py-20 bg-cream">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-[2fr_3fr] gap-16 items-center">

        <!-- Texto -->
        <div class="flex flex-col gap-6">
          <h2 class="font-serif text-4xl md:text-5xl text-brown-dark font-light">
            Prazer, sou Mariana Fatur
          </h2>

          <div class="w-10 h-px bg-brown-light"></div>

          <!-- Foto com blob -->
          <div class="flex justify-center relative md:hidden">
            <!-- Blob background -->
            <div
              class="absolute inset-0 m-6 rounded-[20%_10%_20%_40%/20%_10%_40%_20%] bg-olive/20"
              style="transform: rotate(-5deg);"
            ></div>
            <img
              :src="assetUrl('/images/mariana-red.jpg')"
              alt="Mariana Fatur"
              class="relative z-10 w-full object-cover rounded-[60%_40%_30%_70%/60%_30%_70%_40%] shadow-lg"
            />
          </div>

          <div class="font-sans text-brown-dark/80 leading-[2] text-base space-y-4">
            <p>
              Formada pela Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS),
              com diversos cursos de especialização, participação em congressos, mentorias
              e experiência em atendimentos clínicos de jovens e adultos, há mais de dez
              anos acompanho pessoas que buscam expandir seu autoconhecimento, inteligência
              emocional e autoconfiança para alcançar maior equilíbrio entre sua vida pessoal
              e profissional e obter maior satisfação e qualidade de vida.
            </p>
            <p>
              Meus atendimentos são na modalidade online, com base Psicanalítica, e meu
              trabalho é criar um espaço de escuta qualificada — sem julgamento ou sem
              pressa; com profundidade.
            </p>
          </div>
        </div>

        <!-- Foto com blob -->
        <div class="flex justify-center relative hidden md:block">
          <!-- Blob background -->
          <div
            class="absolute inset-0 m-6 rounded-[20%_10%_20%_40%/20%_10%_40%_20%] bg-olive/20"
            style="transform: rotate(-5deg);"
          ></div>
          <img
            :src="assetUrl('/images/mariana-red.jpg')"
            alt="Mariana Fatur"
            class="relative z-10 w-full object-cover rounded-[60%_40%_30%_70%/60%_30%_70%_40%] shadow-lg"
          />
        </div>

      </div>
    </section>

    <!-- Divisor orgânico -->
    <div class="w-full overflow-hidden leading-none bg-cream">
      <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg"
           class="w-full h-12 block" preserveAspectRatio="none">
        <path fill="#EDE8DC" d="M0,0 C360,60 1080,0 1440,0 L1440,60 L0,60 Z"/>
      </svg>
    </div>

    <!-- Seção: Formação e Experiência -->
    <section class="py-20 bg-beige">
      <div class="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        <!-- Foto P&B -->
        <div class="flex justify-center hidden md:block">
          <img
            :src="assetUrl('/images/chair.jpg')"
            alt="Ambiente terapêutico"
            class="w-full max-w-xs md:max-w-sm object-cover shadow-md"
          />
        </div>

        <!-- Credenciais -->
        <div class="flex flex-col gap-8">
          <h2 class="section-title">Formação e Experiência</h2>

          <div class="divide-y divide-brown-light/30">
            <div
              v-for="item in formacao"
              :key="item"
              class="py-4 flex items-center gap-4"
            >
              <span class="w-2 h-2 rounded-full bg-brown flex-shrink-0"></span>
              <p class="text-base text-brown-dark tracking-wide">{{ item }}</p>
            </div>
          </div>

          <blockquote class="font-serif text-brown-dark text-xl leading-relaxed border-l-2 border-brown-light pl-4">
            A terapia é um espaço seguro e sigiloso de autoconhecimento para aprender
            a lidar com emoções, melhorar relacionamentos e desenvolver qualidade de vida.
          </blockquote>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup lang="ts">
useHead({ title: 'Sobre | Psicóloga Mariana Fatur' })
const assetUrl = useAssetUrl()

const formacao = [
  'Psicóloga | CRP: 07/21477',
  'Graduada em Psicologia pela Pontifícia Universidade Católica do Rio Grande do Sul (PUCRS)',
  'Formação em Psicologia Forense',
  'Mais de 10 anos de experiência clínica',
  'Atendimento de jovens e adultos',
]
</script>
