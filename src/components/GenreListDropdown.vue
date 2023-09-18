<script setup lang="ts">
  import BaseCard from "@/components/BaseCard.vue";
  import GenreList from "@/components/GenreList.vue";
</script>

<template>
  <BaseCard class="genre__dropdown flex flex--column gap--sm">
    <GenreList>
      <template #link="{ categoryName }">
        <p class="genre__link">{{ categoryName }}</p>
      </template>
    </GenreList>
  </BaseCard>
</template>

<style scoped>
  .genre__dropdown {
    width: 240px;
  }

  .genre__link {
    padding-left: 1.2em;

    line-height: 1.1;

    transition-property: padding-left;
    transition-duration: 200ms;
  }

  .genre__link:hover {
    padding-left: 1.6em;
  }
</style>
