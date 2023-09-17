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
  <!-- middleman class, because we need to drill (maybe bad!?) the category identifier -->
  <section class="flex flex--wrap gap--md">
    <CategorySelection
      v-for="(book, i) of booksToDisplay"
      v-bind:key="`selection-${i}`"
      :book="book"
    />
  </section>
</template>
