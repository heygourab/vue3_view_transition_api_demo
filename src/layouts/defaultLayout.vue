<template>
  <VueLenis root :options="lenisOption" />
  <div>
    <NavBar />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script lang="ts" setup>
import NavBar from '@/components/NavBar.vue'
import type { LenisOptions } from 'lenis'
import { VueLenis } from 'lenis/vue'
const lenisOption: LenisOptions = {
  duration: 1,
  smoothWheel: true,
}
</script>
