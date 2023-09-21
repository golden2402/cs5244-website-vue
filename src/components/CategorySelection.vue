<script setup lang="ts">
  import { RouterLink } from "vue-router";

  import type { BookItem } from "@/types";

  import BaseBookCover from "@/components/BaseBookCover.vue";
  import BaseCard from "@/components/BaseCard.vue";

  import IconShoppingCart02 from "@/assets/icons/IconShoppingCart02.vue";

  defineProps<{
    book: BookItem;
  }>();
</script>

<template>
  <!-- sort of like sinking the error; maybe bad practice: -->
  <BaseCard class="category__item">
    <div class="flex gap--sm">
      <BaseBookCover class="book__cover" :src="book.cover" />
      <div class="category__item__details flex flex--column justify--between">
        <section class="book__header">
          <h3>{{ book.title }}</h3>
          <p>by {{ book.authors.join(", ") }}</p>
        </section>

        <section class="flex gap--sm">
          <div class="book__cost flex justify--center align--center">
            <p>${{ book.price }}</p>
          </div>
          <RouterLink to="/">
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

  .category__item__details {
    flex-grow: 1;
  }

  .book__header h1,
  .book__header h2,
  .book__header h3 {
    text-transform: uppercase;
  }

  .book__cost {
    flex-grow: 1;

    outline: var(--default-outline);
    border-radius: var(--default-border-radius);
  }
</style>
