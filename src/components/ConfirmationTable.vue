<script setup lang="ts">
  import { computed } from "vue";

  import type { OrderDetails } from "@/types";

  import BaseCard from "@/components/BaseCard.vue";
  import ConfirmationTableInfoRow from "@/components/ConfirmationTableInfoRow.vue";

  import asDollarsAndCents from "@/util/as-dollars-and-cents";

  const { orderDetails } = defineProps<{
    orderDetails: OrderDetails;
  }>();

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

  function bookAt(i: number) {
    return orderDetails.books[i];
  }
</script>

<template>
  <div class="table__container flex flex--column gap--sm">
    <p class="">
      Your order confirmation number is
      <span class="confirmation__number">{{ orderDetails.order.confirmationNumber }}</span
      >. Don&apos;t lose it!
    </p>

    <section>
      <h2>Items</h2>
      <BaseCard>
        <div class="item__table gap--md">
          <!-- table header: -->
          <header class="item__table__row gap--sm item__table__header">
            <div>Title</div>
            <div>Quantity</div>
            <div>Price</div>
          </header>
          <!-- table content: -->
          <div
            class="item__table__row gap--sm"
            v-for="({ quantity }, i) in orderDetails.lineItems"
            :key="i"
          >
            <div>{{ bookAt(i).title }}</div>
            <div>{{ quantity }}</div>
            <div>{{ asDollarsAndCents(quantity * bookAt(i).price) }}</div>
          </div>
        </div>
      </BaseCard>
    </section>

    <section>
      <h2>Purchase Information</h2>
      <div class="flex flex--column gap--sm">
        <section>
          <h3>Order</h3>
          <BaseCard>
            <ConfirmationTableInfoRow
              title="Confirmation Number"
              :value="orderDetails.order.confirmationNumber"
            />
            <ConfirmationTableInfoRow title="Order Time" :value="orderDate" />
            <ConfirmationTableInfoRow
              title="Bank Card"
              :value="`**** **** **** ${orderDetails.customer.ccNumber.slice(
                -4
              )} (${ccExpMonth}-${ccExpYear})`"
            />
          </BaseCard>
        </section>

        <section>
          <h3>Customer</h3>
          <BaseCard>
            <ConfirmationTableInfoRow title="Name" :value="orderDetails.customer.customerName" />
            <ConfirmationTableInfoRow title="Address" :value="orderDetails.customer.address" />
            <ConfirmationTableInfoRow title="Email" :value="orderDetails.customer.email" />
            <ConfirmationTableInfoRow title="Phone" :value="orderDetails.customer.phone" />
          </BaseCard>
        </section>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .table__container {
    min-width: 36em;
  }

  .confirmation__number {
    color: var(--primary-color);
    font-weight: 600;
  }

  .item__table__row {
    display: grid;
    grid-template-columns: 4fr 1fr 1fr;
  }

  .item__table__header {
    font-weight: 500;
  }
</style>
