<script setup lang="ts">
  import { reactive } from "vue";

  import useVuelidate from "@vuelidate/core";
  import { helpers, maxLength, minLength, required, email } from "@vuelidate/validators";

  import { useCartStore } from "@/stores/cart";
  import { isCreditCard, isMobilePhone } from "@/util/validators";

  // import router from "@/router";

  import BaseCard from "@/components/BaseCard.vue";
  import CheckoutFieldError from "@/components/CheckoutFieldError.vue";
  import asDollarsAndCents from "@/util/as-dollars-and-cents";

  const surchargeInCents = 500;

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
    },
    address: {
      required: helpers.withMessage("Please provide an address.", required),
      minLength: helpers.withMessage("Address must have at least 4 letters.", minLength(4)),
      maxLength: helpers.withMessage("Address can have at most 45 letters.", maxLength(45))
    },
    email: {
      required: helpers.withMessage("Please provide an email address.", required),
      isFormatted: helpers.withMessage("Please provide a valid email address.", email)
    },
    phone: {
      required: helpers.withMessage("Please provide an email address.", required),
      isFormatted: helpers.withMessage("Please provide a valid phone number.", isMobilePhone)
    },
    ccNumber: {
      required: helpers.withMessage("Please provide a credit card number.", required),
      isFormatted: helpers.withMessage("Please provide a valid credit card number.", isCreditCard)
    },
    ccExpiryMonth: {
      required: helpers.withMessage("Please provide a credit card expiry month.", required)
    },
    ccExpiryYear: {
      required: helpers.withMessage("Please provide a credit card expiry year.", required)
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
  <div class="checkout__page container flex flex--column">
    <h1>Checkout</h1>

    <BaseCard class="checkout__form__base">
      <template v-if="!cart.empty">
        <form
          class="checkout__form flex flex--column align--center gap--md"
          @submit.prevent="submitOrder"
        >
          <div class="checkout__input__field checkout__grid__column">
            <div>
              <label for="name">Name</label>
              <BaseCard>
                <input type="text" id="name" name="name" v-model.lazy="v$.name.$model" />
              </BaseCard>
              <CheckoutFieldError :field-name="v$.name" />
            </div>

            <div>
              <label for="phone">Phone</label>
              <BaseCard>
                <input
                  class="textField"
                  type="text"
                  id="phone"
                  name="phone"
                  v-model.lazy="v$.phone.$model"
                />
              </BaseCard>
              <CheckoutFieldError :field-name="v$.phone" />
            </div>
          </div>

          <div class="checkout__input__field">
            <label for="address">Address</label>
            <BaseCard>
              <input type="text" id="address" name="address" v-model.lazy="v$.address.$model" />
            </BaseCard>
            <CheckoutFieldError :field-name="v$.address" />
          </div>

          <div class="checkout__input__field">
            <label for="email">Email</label>
            <BaseCard>
              <input type="text" id="email" name="email" v-model.lazy="v$.email.$model" />
            </BaseCard>
            <CheckoutFieldError :field-name="v$.email" />
          </div>

          <div class="checkout__grid__column">
            <div class="checkout__input__field">
              <label for="ccNumber">Card Number</label>
              <BaseCard>
                <input
                  type="text"
                  id="ccNumber"
                  name="ccNumber"
                  v-model.lazy="v$.ccNumber.$model"
                />
              </BaseCard>
              <CheckoutFieldError :field-name="v$.ccNumber" />
            </div>

            <div class="checkout__input__field">
              <label>Expiration Date</label>
              <div class="checkout__grid__column">
                <select v-model="v$.ccExpiryMonth">
                  <option v-for="(month, index) in months" :key="index" :value="index + 1">
                    {{ (index + 1).toString().padStart(2, "0") }} ({{ month }})
                  </option>
                </select>

                <select v-model="v$.ccExpiryYear">
                  <option v-for="index in 16" :key="index" :value="yearFrom(index - 1)">
                    {{ yearFrom(index - 1) }}
                  </option>
                </select>
              </div>
              <CheckoutFieldError :field-name="v$.ccExpiryMonth" />
              <CheckoutFieldError :field-name="v$.ccExpiryYear" />
            </div>
          </div>

          <section class="checkout__total">
            Your credit card will be charged
            <strong>
              {{ asDollarsAndCents(cart.subtotal + surchargeInCents) }} </strong
            >. ({{ asDollarsAndCents(cart.subtotal) }} +
            {{ asDollarsAndCents(surchargeInCents) }} shipping)
          </section>

          <div class="box--primary checkout__input__field checkout__submit">
            <input
              type="submit"
              name="submit"
              :disabled="form.checkoutStatus === 'PENDING'"
              value="Complete Purchase"
            />
          </div>
          <!-- TODO (style): The submit button should not take up the entire width of the form. -->
          <!-- TODO (style): The submit button should be styled consistent with your own site. -->
        </form>

        <section v-show="form.checkoutStatus !== ''">
          <div v-if="form.checkoutStatus === 'ERROR'">
            Error: Please fix the problems above and try again.
          </div>
          <div v-else-if="form.checkoutStatus === 'PENDING'">Processing...</div>
          <div v-else-if="form.checkoutStatus === 'OK'">Order placed...</div>
          <div v-else>An unexpected error occurred, please try again.</div>
        </section>
      </template>
    </BaseCard>
  </div>
</template>

<style scoped>
  .checkout__page {
    padding: 4em;
  }

  .checkout__form__base {
    padding: 1.2em;
  }

  .checkout__form {
    width: max-content;
  }

  .checkout__input__field {
    width: 100%;
  }

  .checkout__input__field label {
    display: block;

    font-size: 1.1em;
    font-weight: 500;
  }
  .checkout__input__field input,
  .checkout__input__field select {
    width: 100%;
  }

  .checkout__input__field select {
    padding: 0.2em;
    font-family: inherit;
  }

  .checkout__grid__column {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.8em;
  }

  .checkout__total {
  }

  .checkout__submit {
    padding: 0.6em 1em;
    width: max-content;

    font-size: 1.2em;

    cursor: pointer;
  }
</style>
