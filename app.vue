<template>
  <div class="min-h-screen bg-cream">
    <AppHeader />
    <main>
      <NuxtPage :transition="{ name: 'page', mode: 'out-in' }" />
    </main>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
useHead({
  noscript: [
    {
      innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WGMXFTHQ" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
      tagPosition: 'bodyOpen',
    },
  ],
})
</script>

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
