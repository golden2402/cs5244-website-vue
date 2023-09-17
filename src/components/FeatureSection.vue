<script setup lang="ts">
  import { inject } from "vue";
  import type { BookItem } from "@/types";

  import BookCover from "@/components/BaseBookCover.vue";

  import IconStar06 from "@/assets/icons/IconStar06.vue";

  const bookList = inject("bookList") as Map<number, BookItem>;
  const featuredBooks = [1001, 1001, 1001, 1001, 1001, 1001]
    .map((id) => bookList.get(id))
    .filter(Boolean);
</script>

<template>
  <div class="featured flex flex--column justify--center gap--md">
    <div>
      <div class="featured__header flex justify--center align--center gap--xs">
        <IconStar06 />
        <h1 class="featured__title">Featured Titles</h1>
      </div>
      <p class="featured__blurb">Your next best book could be right here.</p>
    </div>
    <div v-if="featuredBooks.length > 0" class="flex flex--wrap justify--center gap--sm">
      <BookCover v-for="(item, id) of featuredBooks" v-bind:key="id" :src="item!.cover()" />
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
</style>
