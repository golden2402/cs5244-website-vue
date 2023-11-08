import { defineStore } from "pinia";

import type { BookItemResource, CustomerForm, OrderDetails, ServerErrorResponse } from "@/types";

import { apiUrl } from "@/api";
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
    },
    async placeOrder(customerForm: CustomerForm): Promise<OrderDetails | ServerErrorResponse> {
      const order = { cart: this.cart, customerForm: customerForm };
      console.log(JSON.stringify(order));

      const response: Response = await fetch(`${apiUrl}/orders`, {
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json"
        },
        redirect: "follow",
        referrer: "client",
        method: "POST", // or 'PUT'
        body: JSON.stringify(order)
      });

      const placeOrderResponse: OrderDetails | ServerErrorResponse = await response.json();

      if (response.ok) {
        this.clearCart();
      }
      return placeOrderResponse;
    }
  }
});
