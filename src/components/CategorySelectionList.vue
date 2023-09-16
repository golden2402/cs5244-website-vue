<script setup lang="ts">
  import { inject } from "vue";
  import type { BookItem } from "@/types";

  import CategorySelection from "@/components/CategorySelection.vue";

  const { id: categoryId } = defineProps<{
    id: number;
  }>();

  const bookCategories = inject("bookCategories") as Map<number, BookItem[]>;
  const booksToDisplay = bookCategories.get(categoryId);
</script>

<template>
  <!-- middleman class, because we need to drill (maybe bad!?) the category identifier -->
  <section class="flex flex--wrap gap--md">
    <CategorySelection
      v-for="(book, i) of booksToDisplay"
      v-bind:key="`selection-${i}`"
      :book="book"
    />
  </section>
</template>
