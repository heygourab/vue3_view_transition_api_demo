<template>
  <div class="flex items-center">
    <div class="w-1/2">
      <img src="/images/image1.jpg" class="object-cover h-screen w-full" />
    </div>
    <p class="w-1/2 p-6 text-2xl font-light tracking-normal text-white" ref="intro">
      Apple MacBooks are like the James Bond of laptops—sleek, mysterious, and always ready for
      action (or at least a coffee shop photoshoot). Their keyboards are so satisfying, you’ll want
      to write a novel just for the clickety-clack. The trackpad? It’s smoother than jazz. And let’s
      not forget the battery life, which lasts longer than most of my New Year’s resolutions.
      MacBooks are so thin, you’ll wonder if you accidentally bought a futuristic serving tray.
      They’re the only laptops that make you feel cooler just by opening the lid. Plus, every time
      you see that glowing Apple logo, you know you’re part of a secret club where everysone
      pretends they’re editing a blockbuster movie.
    </p>
  </div>
</template>

<script lang="ts" setup>
import gsap from 'gsap'
import { onMounted, onUnmounted, useTemplateRef } from 'vue'
import SplitText from 'gsap/SplitText'
gsap.registerPlugin(SplitText)

const target = useTemplateRef('intro')
let split: SplitText
let ctx: gsap.Context

onMounted(() => {
  split = SplitText.create(target.value, {
    type: 'lines',
    mask: 'lines',
    autoSplit: true,
  })

  ctx = gsap.context(() => {
    gsap.from(split.lines, {
      duration: 1,
      yPercent: 100,
      opacity: 0,
      stagger: 0.2,
      delay: 2,
      ease: 'expo.out',
    })
  })
})

onUnmounted(() => {
  split.revert()
  ctx.revert()
})
</script>
