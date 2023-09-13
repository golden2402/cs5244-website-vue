<script setup lang="ts">
import BaseCard from "@/components/BaseCard.vue";

defineProps<{
  icon: string;
  title: string;
  blurb: string;
}>();
</script>

<template>
  <BaseCard class="quickstart__card">
    <div class="flex justify--between align--center">
      <h3 class="title">{{ title }}</h3>
      <img :src="icon" width="24" />
    </div>
    <p>{{ blurb }}</p>
  </BaseCard>
</template>

<style scoped>
.quickstart__card {
  padding: 0.8em;
}

.quickstart__card h1,
.quickstart__card h2,
.quickstart__card h3 {
  text-transform: uppercase;
}
</style>
