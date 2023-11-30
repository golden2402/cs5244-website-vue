<script setup lang="ts">
  import { useBookStore } from "@/stores/book";

  import { useRoute, useRouter } from "vue-router";
  import { watch } from "vue";

  import CategorySelection from "@/components/CategorySelection.vue";

  const route = useRoute();
  const router = useRouter();

  const bookStore = useBookStore();

  watch(
    () => route.params.id,
    async (newId) => {
      const id = Array.isArray(newId) ? newId[0] : newId;

      if (id !== undefined) {
        const success = await bookStore.fetchBooks(id);

        if (!success) {
          router.push({ name: "error" });
        }
      }
    },
    { immediate: true }
  );
</script>

<template>
  <section class="book__selection__grid">
    <CategorySelection
      v-for="(book, i) of bookStore.bookList"
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
