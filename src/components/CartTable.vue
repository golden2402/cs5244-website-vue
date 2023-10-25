<script setup lang="ts">
  import { useCartStore } from "@/stores/cart";

  import type { BookItemResource } from "@/types";

  import getBookImage from "@/util/get-book-image";

  import IconClose from "@/assets/icons/IconClose.vue";
  import BaseCard from "./BaseCard.vue";

  const cart = useCartStore().cart;

  function handleQuantityChange(input: HTMLInputElement, book: BookItemResource) {
    const { value } = input;
    // if we have an empty character, it likely means someone is stil trying to
    // type! short-circuit instead of quantifying as 0 (and thus deleting):
    if (value === "") {
      return;
    }

    // we're going to set a lower bound of 1, so the delete functionality is
    // exclusive to the remove button:
    const newQuantity = Math.min(Math.max(1, Number(value)), 99);
    if (cart.update(book, newQuantity)) {
      input.value = newQuantity.toString();
    }
  }

  function deleteItem(book: BookItemResource) {
    return cart.update(book, 0);
  }
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
          <BaseCard class="cart__item__cover__seat">
            <img class="cart__item__cover" :src="getBookImage(book.bookId)" />
          </BaseCard>
        </div>
        <div class="flex flex--column justify--center">
          <p class="cart__item__name">{{ book.title }}</p>
          <p class="cart__item__author">by {{ book.author }}</p>
        </div>
        <div class="flex flex--column justify--center">
          <BaseCard>
            <input
              class="cart__item__quantity"
              type="number"
              :value="quantity"
              @input="(e) => handleQuantityChange(e.target as HTMLInputElement, book)"
            />
          </BaseCard>
          <p class="cart__item__quantity__subtext">Max. 99</p>
        </div>
        <div class="flex flex--column justify--center">${{ (book.price / 100).toFixed(2) }}</div>
        <div class="flex flex--column justify--center align--center gap--sm">
          <button class="remove__item__button" @click="deleteItem(book)">
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

  .cart__item__cover__seat {
    padding: 0.2em;
  }
  .cart__item__cover {
    max-height: 10em;
  }

  .cart__item__author {
    color: var(--text-color-mute);
    font-size: 0.9em;
  }

  .cart__item__quantity {
    width: 100%;
  }

  .cart__item__quantity__subtext {
    color: var(--text-color-mute);
    font-size: 0.8em;
  }

  .remove__item__button {
    display: inline-flex;
  }

  .remove__item__icon {
    color: var(--text-color-mute);
  }
</style>
