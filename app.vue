<template>
  <div class="min-h-screen bg-cream">
    <AppHeader />
    <main>
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    </main>
    <AppFooter />
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
