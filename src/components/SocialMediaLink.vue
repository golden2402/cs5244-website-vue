<script setup lang="ts">
  defineProps<{
    href: string;
  }>();
</script>

<template>
  <a :href="href" target="_blank" class="icon__seat">
    <slot class="icon"></slot>
  </a>
</template>

<style scoped>
  .icon__seat {
    display: inline-flex;
  }

  .icon {
    max-width: 20px;
  }
</style>
