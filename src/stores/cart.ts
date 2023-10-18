import { defineStore } from "pinia";

import type { BookItemResource } from "@/types";

import { ShoppingCart } from "@/models/shopping-cart";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cart: new ShoppingCart()
  }),

  getters: {
    count(): number {
      return this.cart.numberOfItems;
    }
  },

  actions: {
    clearCart() {
      this.cart.clear();
    },
    addToCart(book: BookItemResource) {
      this.cart.addBook(book);
    },
    updateBookQuantity(book: BookItemResource, quantity: number) {
      this.cart.update(book, quantity);
    }
  }
});
