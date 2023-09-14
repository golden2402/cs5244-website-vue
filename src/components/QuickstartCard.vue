<script setup lang="ts">
  import BaseCard from "@/components/BaseCard.vue";

  defineProps<{
    title: string;
    blurb: string;
  }>();
</script>

<template>
  <BaseCard class="quickstart__card">
    <div class="flex justify--between align--center">
      <h3 class="title">{{ title }}</h3>
      <slot name="icon"></slot>
    </div>
    <p>{{ blurb }}</p>
  </BaseCard>
</template>

<style scoped>
  .quickstart__card h1,
  .quickstart__card h2,
  .quickstart__card h3 {
    text-transform: uppercase;
  }
</style>
