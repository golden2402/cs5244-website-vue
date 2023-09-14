<script setup lang="ts">
  defineProps<{
    title: string;
  }>();
</script>

<template>
  <section class="footer__links">
    <h3>{{ title }}</h3>
    <slot></slot>
  </section>
</template>

<style scoped>
  .footer__links h1,
  .footer__links h2,
  .footer__links h3 {
    text-transform: uppercase;
  }
</style>
