<script setup lang="ts">
  import { useOrderDetailsStore } from "@/stores/order-details";

  import ConfirmationTable from "@/components/ConfirmationTable.vue";

  const orderDetailsStore = useOrderDetailsStore();
  const orderDetails = orderDetailsStore.orderDetails;
</script>

<template>
  <div class="confirmation__page container flex flex--column">
    <h1>Confirmation</h1>
    <ConfirmationTable v-if="orderDetails" :order-details="orderDetails" />
    <div v-else>
      <h2>Uh oh!</h2>
      <p>
        We don&apos;t have a previous order for you on file.
        <span class="confirmation__error__message">Did you order something?</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
  .confirmation__page {
    padding: 4em;
  }

  .confirmation__error__message {
    font-weight: 500;
  }
</style>
