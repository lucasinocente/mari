<template>
  <header class="sticky top-0 z-50 backdrop-blur-sm border-b border-beige header">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center justify-start gap-2">
        <img
          :src="assetUrl('/images/logo.png')"
          alt="Mariana Fatur — Psicóloga"
          class="h-14 w-auto object-contain flex-shrink-0"
        />
        <!-- Texto só aparece em telas grandes (lg+) -->
        <img
          :src="assetUrl('/images/logo-escrito.png')"
          alt="Mariana Fatur — Psicóloga"
          class="hidden lg:block h-8 mt-1 w-auto object-contain"
        />
      </NuxtLink>

      <!-- Nav Desktop -->
      <nav class="hidden md:flex items-center gap-8">
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav-link"
          active-class="text-brown-dark font-bold underline underline-offset-4 decoration-1"
        >
          {{ link.label }}
        </NuxtLink>


      <!-- CTA Desktop -->
      <a
        :href="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="hidden md:block btn-outline"
      >
        Agendar uma conversa
      </a>
      </nav>


      <!-- Mobile menu toggle -->
      <button
        class="md:hidden text-brown p-1"
        aria-label="Menu"
        @click="menuOpen = !menuOpen"
      >
        <svg v-if="!menuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="slide">
      <div
        v-if="menuOpen"
        class="md:hidden bg-cream border-t border-beige px-6 py-6 flex flex-col gap-5"
      >
        <NuxtLink
          v-for="link in links"
          :key="link.to"
          :to="link.to"
          class="nav-link text-base"
          @click="menuOpen = false"
        >
          {{ link.label }}
        </NuxtLink>
        <a
          :href="whatsappUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-outline text-center mt-2"
          @click="menuOpen = false"
        >
          Agendar uma conversa
        </a>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
const menuOpen = ref(false)
const assetUrl = useAssetUrl()

// Troque pelo número real no formato internacional (sem + e espaços)
const whatsappUrl = 'https://wa.me/5551981969035?text=Ol%C3%A1%2C+gostaria+de+agendar+uma+conversa!'

const links = [
  { to: '/sobre',      label: 'Sobre'      },
  { to: '/areas',      label: 'Áreas'      },
  { to: '/abordagem',  label: 'Abordagem'  },
  { to: '/faq',        label: 'FAQ'        },
  { to: '/contato',    label: 'Contato'    },
]

// Fecha o menu ao mudar de rota
const route = useRoute()
watch(() => route.path, () => { menuOpen.value = false })
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.25s ease;
}
.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

header.header {
  background: #e0dacf;
  font-weight: bold;
}
</style>
