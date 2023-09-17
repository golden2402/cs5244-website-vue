<script setup lang="ts">
  import { inject } from "vue";
  import type { BookItem } from "@/types";

  import CategorySelection from "@/components/CategorySelection.vue";

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { id: categoryId } = defineProps<{
    id: number;
  }>();

  const bookCategories = inject("bookCategories") as Map<number, BookItem[]>;
  // TODO: replace with categoryId later:
  const booksToDisplay = bookCategories.get(1001);
</script>

<template>
  <section class="book__selection__grid">
    <CategorySelection
      v-for="(book, i) of booksToDisplay"
      v-bind:key="`selection-${i}`"
      :book="book"
    />
  </section>
</template>

<style scoped>
  .book__selection__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 10px;
    justify-items: center;
    height: max-content;
  }

  @media screen and (max-width: 1200px) {
    .book__selection__grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
