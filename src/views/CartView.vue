<script setup lang="ts">
  import type { RouterLink } from "vue-router";

  import CartTable from "@/components/CartTable.vue";
</script>

<template>
  <div class="cart__page container">
    <h1>Your Cart</h1>
    <div class="cart__columns flex gap--md container">
      <!-- cart table: -->
      <div class="cart__table">
        <CartTable />
      </div>
      <!-- actions: -->
      <div class="cart__actions flex flex--column gap--sm">
        <RouterLink to="/checkout">
          <div class="cta box--primary">
            <h1 class="cta__title">Checkout</h1>
          </div>
        </RouterLink>
        <RouterLink to="/category">
          <div class="continue__shopping__button box--secondary">
            <p class="title">Continue Shopping</p>
          </div>
        </RouterLink>
        <button class="clear__cart__button">
          <i>Clear Cart</i>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .cart__page {
    padding: 4em;
  }

  .cart__columns > * {
  }

  .cart__table {
  }

  .cart__actions {
    min-width: 24em;
  }

  .cta .cta__title {
    text-align: center;
  }

  .continue__shopping__button {
    text-align: center;
  }

  .continue__shopping__button .title {
    font-size: 1.1em;
  }

  .clear__cart__button {
    padding: 0.4em;

    color: var(--primary-color);
    text-align: center;
  }
</style>
