<template>
  <div class="flex min-h-screen items-center justify-center">
    <h1 ref="hero" class="text-[240px] font-extrabold tracking-tight">Hello </h1>
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { onMounted, onUnmounted, useTemplateRef } from 'vue'
import SplitText from 'gsap/SplitText'

gsap.registerPlugin(SplitText)

const target = useTemplateRef('hero')
let split: SplitText
let ctx: gsap.Context

onMounted(() => {
  split = SplitText.create(target.value, {
    type: 'lines, chars',
    mask: 'lines',
    autoSplit: true,
  })

  ctx = gsap.context(() => {
    gsap.from(split.chars, {
      y: 100,
      filter: 'blur(12px)',
      autoAlpha: 0,
      duration: 1,
      stagger: 0.075,
      ease: 'power4.Out',
      delay: 1.5,
    })
  })
})

onUnmounted(() => {
  split.revert()
  ctx.revert()
})
</script>
