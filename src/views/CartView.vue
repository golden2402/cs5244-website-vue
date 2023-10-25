<script setup lang="ts">
  import { RouterLink } from "vue-router";

  import { useCartStore } from "@/stores/cart";
  import { useCategoryStore } from "@/stores/category";

  import CartTable from "@/components/CartTable.vue";

  const cartStore = useCartStore();
  const categoryList = useCategoryStore().categoryList;
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
        <RouterLink :to="`/category/${Array.from(categoryList.keys())[0]}`">
          <div class="continue__shopping__button box--secondary">
            <p class="title">Continue Shopping</p>
          </div>
        </RouterLink>
        <button class="clear__cart__button" @click="cartStore.clearCart()">
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
