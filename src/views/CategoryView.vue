<script setup lang="ts">
  import GenreList from "@/components/GenreList.vue";
  import CategorySelectionList from "@/components/CategorySelectionList.vue";

  import BaseCard from "@/components/BaseCard.vue";
</script>

<template>
  <div class="category__page container flex gap--md">
    <BaseCard class="genre__selection flex flex--column gap--sm">
      <GenreList>
        <template #link="{ categoryName }">
          <div class="genre__selection__link">{{ categoryName }}</div>
        </template>
      </GenreList>
    </BaseCard>
    <CategorySelectionList />
  </div>
</template>

<style scoped>
  .category__page {
    padding: 4em 0;
  }

  .genre__selection {
    height: min-content;
    min-width: 280px;
  }

  .genre__selection__link {
    padding: 0.3em 0.4em;

    color: var(--text-color-mute);

    outline: var(--default-outline);
    border-radius: var(--default-border-radius);

    transition-property: background-color, color, outline-color;
    transition-duration: 150ms;
  }

  .genre__selection__link:hover {
    background-color: var(--secondary-color);
    color: var(--secondary-color-alt);
    outline-color: var(--secondary-color-alt);
  }

  .router-link-active .genre__selection__link {
    background-color: var(--primary-color);
    color: var(--primary-color-alt);
  }
</style>
