<template>
  <div class="bg-secondary-400 h-full py-24">
    <NuxtPage />
  </div>
</template>
<script setup>
import "./assets/css/tailwind.css";
useHead({
  title: "Product feedback",
  // or, instead:
  // titleTemplate: (title) => `My App - ${title}`,
  viewport: "width=device-width, initial-scale=1, maximum-scale=1",
  charset: "utf-8",
  meta: [{ name: "description", content: "My amazing site." }],
  htmlAttrs: {
    class: "font-jost text-primary-500",
  },
});
</script>
