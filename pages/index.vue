<template>
  <section class="min-h-[calc(100vh-73px)] flex items-center">
    <div class="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

      <div class="md:hidden text-center">
        <h1 class="font-script text-6xl md:text-7xl text-brown leading-tight">
          Mariana Fatur
        </h1>
        <p class="font-sans text-sm tracking-[0.25em] uppercase text-brown-mid mt-2">
          Psicóloga &nbsp;|&nbsp; CRP: 07/21477
        </p>
      </div>

      <div class="md:hidden mx-auto w-12 h-px bg-brown-light"></div>

      <!-- Foto -->
      <div class="flex justify-center md:justify-start relative">
        <!-- Blob background -->
        <div
          class="absolute inset-0 m-6 rounded-[50%_10%_30%_20%/20%_10%_40%_20%] bg-olive/20"
          style="transform: rotate(-5deg);"
        ></div>
        <img
          :src="'/images/mariana-black.jpg'"
          alt="Mariana Fatur"
          class="relative z-10 w-full max-w-sm md:max-w-md object-cover rounded-[60%_50%_30%_70%/60%_20%_20%_80%] shadow-lg"
        />
      </div>

      <!-- Conteúdo -->
      <div class="flex flex-col gap-6">
        <div class="hidden md:block">
          <h1 class="font-script text-6xl md:text-7xl text-brown leading-tight">
            Mariana Fatur
          </h1>
          <p class="font-sans text-sm tracking-[0.25em] uppercase text-brown-mid mt-2">
            Psicóloga &nbsp;|&nbsp; CRP: 07/21477
          </p>
        </div>

        <div class="hidden md:block w-12 h-px bg-brown-light"></div>

        <div class="font-serif text-xl italic text-brown leading-relaxed">
          Descubra uma vida mais saudável através da psicoterapia.
        </div>

        <div class="font-sans text-brown-dark/80 leading-[2] text-base max-w-md">
          <p>
            A terapia é um convite para olhar com mais profundidade para si mesmo,
            compreender padrões que se repetem, desenvolver novos recursos emocionais
            e construir formas mais saudáveis de se relacionar consigo, com os outros
            e com a vida.
          </p>
          <p class="mt-4">
            Tenha no ambiente da terapia o local onde você se sinta escutado e validado.
            Se você chegou até aqui, talvez já saiba que é hora de começar.
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
</template>

<script setup lang="ts">
useHead({ title: 'Mariana Fatur | Psicóloga' })
</script>
