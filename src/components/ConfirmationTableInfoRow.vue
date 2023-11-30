<script setup lang="ts">
  defineProps<{
    title: string;
    value: any;
  }>();
</script>

<template>
  <div class="info__table__row">
    <div class="info__table__title">{{ title }}</div>
    <div>{{ value }}</div>
  </div>
</template>

<style scoped>
  .info__table__row {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .info__table__title {
    font-weight: 500;
  }
</style>
