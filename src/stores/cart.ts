import { defineStore } from "pinia";

import type { BookItemResource } from "@/types";

import { ShoppingCart } from "@/models/shopping-cart";

const CART_STORAGE_KEY = "_shopping_cart";

export const useCartStore = defineStore("CartStore", {
  state: () => {
    const cart = new ShoppingCart();
    const cartStorageKey = localStorage.getItem(CART_STORAGE_KEY);

    if (cartStorageKey) {
      Object.assign(cart, JSON.parse(cartStorageKey) as ShoppingCart);
    }

    return { cart: cart };
  },
  getters: {
    count(): number {
      return this.cart.numberOfItems;
    }
  },
  actions: {
    clearCart() {
      this.cart.clear();
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cart));
    },
    addToCart(book: BookItemResource) {
      this.cart.addBook(book);
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cart));
    },
    updateBookQuantity(book: BookItemResource, quantity: number) {
      const result = this.cart.update(book, quantity);
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(this.cart));

      return result;
    }
  }
});
