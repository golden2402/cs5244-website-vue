<script setup lang="ts">
  import { useCartStore } from "@/stores/cart";

  import type { BookItemResource } from "@/types";

  import getBookImage from "@/util/get-book-image";

  import IconClose from "@/assets/icons/IconClose.vue";
  import BaseCard from "./BaseCard.vue";

  const cart = useCartStore().cart;
</script>

<template>
  <BaseCard class="table__widget">
    <header class="row">
      <div></div>
      <h3>Title</h3>
      <h3>Quantity</h3>
      <h3>Price</h3>
      <div></div>
    </header>

    <!-- fill: -->
    <section class="table__contents">
      <div v-for="{ book, quantity } in cart.items" :key="book.bookId" class="cart__item row">
        <div class="flex justify--center">
          <BaseCard>
            <img class="cart__item__cover" :src="getBookImage(book.bookId)" />
          </BaseCard>
        </div>
        <div class="flex flex--column justify--center">
          <p class="cart__item__name">{{ book.title }}</p>
          <p class="cart__item__author">by {{ book.author }}</p>
        </div>
        <div class="flex flex--column justify--center">
          <BaseCard>
            <input class="cart__item__quantity" type="number" :value="quantity" />
          </BaseCard>
        </div>
        <div class="flex flex--column justify--center">${{ (book.price / 100).toFixed(2) }}</div>
        <div class="flex flex--column justify--center align--center gap--sm">
          <button class="remove__item__button">
            <IconClose class="remove__item__icon" />
          </button>
        </div>
      </div>
    </section>
  </BaseCard>
</template>

<style scoped>
  .table__widget {
    width: max-content;
  }

  .table__widget .row {
    display: grid;
    /* TODO: may need to figure out how to size these wrt. different screens: */
    grid-template-columns: 10em 24em 8em 8em 4em;
    gap: 1em;
  }

  .cart__item {
    border-radius: var(--default-border-radius);
    padding: 0.75em 0;
  }

  .cart__item:nth-child(odd) {
    background-color: var(--secondary-color);
  }

  .cart__item__cover {
    max-height: 8em;
  }

  .cart__item__author {
    color: var(--text-color-mute);
    font-size: 0.9em;
  }

  .cart__item__quantity {
    width: 100%;
  }

  .remove__item__button {
    display: inline-flex;
  }

  .remove__item__icon {
    color: var(--text-color-mute);
  }
</style>
