<script setup lang="ts">
  import { RouterLink } from "vue-router";

  import type { BookItem } from "@/types";

  import BaseBookCover from "@/components/BaseBookCover.vue";
  import BaseCard from "@/components/BaseCard.vue";

  import IconBookOpen01 from "@/assets/icons/IconBookOpen01.vue";
  import IconShoppingCart02 from "@/assets/icons/IconShoppingCart02.vue";

  defineProps<{
    book: BookItem;
  }>();
</script>

<template>
  <!-- sort of like sinking the error; maybe bad practice: -->
  <BaseCard class="category__item">
    <div class="flex gap--sm">
      <div class="book__cover__seat">
        <BaseBookCover class="book__cover" :src="book.cover" />
        <RouterLink to="" v-if="book.isPublic">
          <div class="read__now__button box--secondary">
            <IconBookOpen01 />
          </div>
        </RouterLink>
      </div>
      <div class="category__item__details flex flex--column justify--between">
        <section class="book__header">
          <h3>{{ book.title }}</h3>
          <p>by {{ book.authors.join(", ") }}</p>
        </section>

        <section class="flex gap--sm">
          <div class="book__cost flex justify--center align--center">
            <p>${{ book.price }}</p>
          </div>
          <RouterLink to="">
            <div class="flex gap--sm align--center box--primary">
              <IconShoppingCart02 />
              <p>Add to Cart</p>
            </div>
          </RouterLink>
        </section>
      </div>
    </div>
  </BaseCard>
</template>

<style scoped>
  .category__item {
    height: max-content;
    width: 440px;
  }

  .book__cover {
    width: 150px;
  }

  .book__cover__seat {
    position: relative;
  }

  .read__now__button {
    display: inline-flex;
    
    position: absolute;
    bottom: 0.4em;
    left: 0.4em;

    padding: 0.5em;

    border-radius: 8px;
  }

  .category__item__details {
    flex-grow: 1;
  }

  .book__header h1,
  .book__header h2,
  .book__header h3 {
    line-height: 1.2;
    text-transform: uppercase;
  }

  .book__cost {
    flex-grow: 1;

    outline: var(--default-outline);
    border-radius: var(--default-border-radius);
  }
</style>
