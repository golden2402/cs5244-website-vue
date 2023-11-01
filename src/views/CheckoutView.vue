<script setup lang="ts">
  import { reactive } from "vue";

  import useVuelidate from "@vuelidate/core";
  import { helpers, maxLength, minLength, required } from "@vuelidate/validators";

  import { useCartStore } from "@/stores/cart";
  // import { isCreditCard, isMobilePhone } from "@/utils";
  // import CheckoutFieldError from "@/components/CheckoutFieldError.vue";
  // import router from "@/router";

  import BaseCard from "@/components/BaseCard.vue";
import CheckoutFieldError from "@/components/CheckoutFieldError.vue";

  const cartStore = useCartStore();
  const cart = cartStore.cart;

  const months: string[] = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const form = reactive({
    name: "",
    address: "",
    phone: "",
    email: "",
    ccNumber: "",
    ccExpiryMonth: new Date().getMonth() + 1,
    ccExpiryYear: new Date().getFullYear(),
    checkoutStatus: ""
  });

  const rules = {
    name: {
      required: helpers.withMessage("Please provide a name.", required),
      minLength: helpers.withMessage("Name must have at least 4 letters.", minLength(4)),
      maxLength: helpers.withMessage("Name can have at most 45 letters.", maxLength(45))
    }
    // TODO: Add more validations for these and other fields that need more validation.
  };
  const v$ = useVuelidate(rules, form);

  async function submitOrder() {
    console.log("Submit order");
    const isFormCorrect = await v$.value.$validate();
    if (!isFormCorrect) return;
  }

  /* NOTE: For example yearFrom(0) == <current_year> */
  function yearFrom(index: number) {
    return new Date().getFullYear() + index;
  }
</script>

<template>
  <div class="checkout__page container flex">
    <h1>Checkout</h1>

    <BaseCard>
      <section class="checkout__form" v-if="!cart.empty">
        <form @submit.prevent="submitOrder">
          <div>
            <div>
              <label for="name">Name</label>
              <input type="text" size="20" id="name" name="name" v-model.lazy="v$.name.$model" />
            </div>
            <CheckoutFieldError :field-name="v$.name" />
          </div>

          <!-- TODO: Add address input and validation messages -->

          <div>
            <div>
              <label for="phone">Phone</label>
              <input class="textField" type="text" size="20" id="phone" name="phone" />
            </div>
            <!-- TODO: Add phone validation message(s) -->
          </div>

          <div>
            <label for="email">Email</label>
            <input type="text" size="20" id="email" name="email" />
          </div>

          <!-- TODO: Add email validation message(s) -->

          <div>
            <label for="ccNumber">Credit card</label>
            <input type="text" size="20" id="ccNumber" name="ccNumber" />
          </div>

          <!-- TODO: Add credit card validation message(s) -->

          <div>
            <label>Expiration Month</label>
            <select v-model="v$.ccExpiryMonth">
              <option v-for="(month, index) in months" :key="index" :value="index + 1">
                {{ month }} ({{ index + 1 }})
              </option>
            </select>
          </div>

          <div>
            <label>Expiration Year</label>
            <select>
              <!-- TODO: Complete this select tag for 'ccExpiryYear'. -->
            </select>
          </div>
          <!-- TODO (style): Use a single label for both month and date and put the on the same line. -->
          <!-- TODO (style): For example: Exp Date {Month} {Year}, with space between month/year selectors. -->

          <input
            type="submit"
            name="submit"
            class="button"
            :disabled="form.checkoutStatus === 'PENDING'"
            value="Complete Purchase"
          />
          <!-- TODO (style): The submit button should not take up the entire width of the form. -->
          <!-- TODO (style): The submit button should be styled consistent with your own site. -->
        </form>
        <!-- TODO (style): Fix error message placement so they nearer to the correct fields. -->
        <!-- TODO (style): HINT: Use another <div> and label, input, and error, and use flexbox to style. -->

        <!-- TODO: Display the cart total, subtotal and surcharge. -->

        <section v-show="form.checkoutStatus !== ''" class="checkoutStatusBox">
          <div v-if="form.checkoutStatus === 'ERROR'">
            Error: Please fix the problems above and try again.
          </div>

          <div v-else-if="form.checkoutStatus === 'PENDING'">Processing...</div>

          <div v-else-if="form.checkoutStatus === 'OK'">Order placed...</div>

          <div v-else>An unexpected error occurred, please try again.</div>
        </section>
      </section>
    </BaseCard>
  </div>
</template>

<style scoped>
  .checkout__page {
    display: flex;
    flex-direction: column;

    padding: 4em;
  }
</style>
