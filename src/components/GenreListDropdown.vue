<script setup lang="ts">
  import BaseCard from "./BaseCard.vue";
  import GenreList from "./GenreList.vue";
</script>

<template>
  <BaseCard class="genre__dropdown">
    <GenreList>
      <template #link="{ categoryName }">
        <li>
          <p class="genre__link">{{ categoryName }}</p>
        </li>
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

    transition-property: padding-left;
    transition-duration: 200ms;
  }

  .genre__link:hover {
    padding-left: 1.6em;
  }
</style>
