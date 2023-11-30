<script setup lang="ts">
  // import ConfirmationTable from "@/components/ConfirmationTable";

  import { useOrderDetailsStore } from "@/stores/order-details";
  import { computed } from "vue";

  const orderDetailsStore = useOrderDetailsStore();
  const orderDetails = orderDetailsStore.orderDetails;

  const orderDate = computed(function () {
    return orderDetails ? new Date(orderDetails.order.dateCreated).toLocaleTimeString() : undefined;
  });

  const ccExpDate = computed(function () {
    return orderDetails ? new Date(orderDetails.customer.ccExpDate) : undefined;
  });

  const ccExpYear = computed(function () {
    return ccExpDate?.value?.getFullYear();
  });

  const ccExpMonth = computed(function () {
    const ccExpDateValue = ccExpDate.value;

    if (ccExpDateValue) {
      const month = ccExpDateValue.getMonth() + 1;
      let result = "" + month;

      if (month < 10) {
        result = "0" + month;
      }

      return result;
    }

    return undefined;
  });
</script>

<template>
  <div class="confirmation_page container flex flex--column">
    <h1>Confirmation</h1>
    <template v-if="orderDetails">
      <ul>
        <li>Confirmation #: {{ orderDetails.order.confirmationNumber }}</li>
        <li>Time: {{ orderDate }}</li>
      </ul>
      <!-- <confirmation-table> </confirmation-table> -->
      <ul>
        <li>{{ orderDetails.customer.customerName }}</li>
        <li>{{ orderDetails.customer.address }}</li>
        <li>{{ orderDetails.customer.email }}</li>
        <li>{{ orderDetails.customer.phone }}</li>
        <li>
          **** **** **** {{ orderDetails.customer.ccNumber.slice(-4) }} ({{ ccExpMonth }}-{{
            ccExpYear
          }})
        </li>
      </ul>
      <div id="customerInfo"></div>
    </template>
  </div>
</template>

<style scoped>
  .confirmation_page {
    padding: 4em;
  }

  ul {
    text-align: left;
  }

  ul > li {
    margin: 0.25em;
  }
</style>
