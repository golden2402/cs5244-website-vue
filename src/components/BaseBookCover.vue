<script setup lang="ts">
  import BaseCard from "@/components/BaseCard.vue";

  defineProps<{
    src: string;
  }>();
</script>

<template>
  <BaseCard class="cover__seat">
    <img :src="src" class="book__cover" height="200" />
  </BaseCard>
</template>

<style scoped>
  .cover__seat {
    padding: 0.2em;
    max-width: 150px;
  }
</style>
