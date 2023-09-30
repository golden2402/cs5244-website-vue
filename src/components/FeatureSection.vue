<script setup lang="ts">
  import { inject } from "vue";
  import type { BookItemResource } from "@/types";

  import BookCover from "@/components/BaseBookCover.vue";
  import IconStar06 from "@/assets/icons/IconStar06.vue";

  const categoryList = inject("categoryList") as Map<number, string>;

  // const categoryListIds = Array.from(categoryList.keys());
  // FIXME: currently hardcoded, should be changed to use the set of any
  // [relatively] populated categories:
  const categoryListIds = [1001, 1002, 1003];
  const selectedCategory = categoryListIds[Math.floor(Math.random() * categoryListIds.length)];

  const featuredBooksResponse = await fetch(
    `http://localhost:8080/JohnGBookstoreFetch/api/categories/${selectedCategory}/suggested-books?limit=6`
  );
  const featuredBooks = (await featuredBooksResponse.json()) as BookItemResource[];
</script>

<template>
  <div class="featured flex flex--column justify--center gap--md">
    <div>
      <div class="featured__header flex justify--center align--center gap--xs">
        <IconStar06 />
        <h1 class="featured__title">Featured Titles</h1>
      </div>
      <p class="featured__blurb">
        Jump into
        <RouterLink :to="`/category/${selectedCategory}`">
          <span class="highlight">{{ categoryList.get(selectedCategory) }}</span> </RouterLink
        >.
      </p>
    </div>
    <div v-if="featuredBooks.length > 0" class="flex flex--wrap justify--center gap--sm">
      <RouterLink
        v-for="(item, i) of featuredBooks"
        v-bind:key="i"
        :to="`/category/${selectedCategory}`"
      >
        <BookCover hoverable :src="`/covers/${item.bookId}.png`" />
      </RouterLink>
    </div>
  </div>
</template>

<style scoped>
  .featured {
    height: 100%;
  }

  .featured__header {
    color: var(--primary-color);

    font-size: 1.35em;
    line-height: 1.2;
  }

  .featured__header .featured__title {
    text-transform: uppercase;
  }

  .featured__blurb {
    text-align: center;
    font-size: 1.1em;
  }
  .featured__blurb .highlight {
    transition: color 200ms;
  }

  .featured__blurb .highlight:hover {
    color: var(--primary-color);
  }
</style>
