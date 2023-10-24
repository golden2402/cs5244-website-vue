<script setup lang="ts">
  import type { RouterLink } from "vue-router";
</script>

<template>
  <div class="cart_page flex container">
    <!-- cart table: -->
    <div>
      <h1>Your Cart</h1>
      <!-- cart component -->
    </div>
    <!-- actions: -->
    <div class="action__column flex flex--column gap--sm">
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
</template>

<style scoped>
  .cart_page > * {
    flex: 1;
    padding: 1em;
  }

  .action__column {
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
