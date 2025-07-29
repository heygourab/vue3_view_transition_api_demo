<template>
  <nav class="fixed top-0 left-0 w-full px-8 py-4">
    <ul class="flex justify-between items-center tracking-wide text-neutral-100">
      <li>
        <RouterLink to="/" class="text-xs tracking-wide">INDEX</RouterLink>
      </li>
      <div class="flex gap-8">
        <li>
          <RouterLink to="/product" class="text-xs tracking-wide">PRODUCT</RouterLink>
        </li>
        <li>
          <RouterLink to="/info" class="text-xs tracking-wide">INFO</RouterLink>
        </li>
      </div>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router'
</script>
