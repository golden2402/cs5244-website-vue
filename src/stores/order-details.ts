import { defineStore } from "pinia";

import type { OrderDetails } from "@/types";

const ORDER_STORAGE_KEY = "_order_details";

interface OrderDetailsStore {
  orderDetails?: OrderDetails;
}

export const useOrderDetailsStore = defineStore("OrderDetailsStore", {
  state: () => {
    let orderDetails: OrderDetails | undefined;
    const orderStorage = sessionStorage.getItem(ORDER_STORAGE_KEY);

    if (orderStorage) {
      orderDetails = JSON.parse(orderStorage) as OrderDetails;
    }

    return { orderDetails: orderDetails } as OrderDetailsStore;
  },
  getters: {},
  actions: {
    setOrderDetails(orderDetails?: OrderDetails) {
      this.orderDetails = orderDetails;
      
      if (orderDetails) {
        sessionStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orderDetails));
      }
    },
    hasOrderDetails() {
      const orderDetails = this.orderDetails;

      return (
        typeof orderDetails === "object" && !Array.isArray(orderDetails) && orderDetails !== null
      );
    },
    clearOrderDetails() {
      this.setOrderDetails(undefined);
      sessionStorage.removeItem(ORDER_STORAGE_KEY);
    }
  }
});
