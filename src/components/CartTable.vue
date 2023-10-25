<script setup lang="ts">
  import BaseCard from "./BaseCard.vue";
</script>

<template>
  <BaseCard class="table__widget">
    <header class="row">
      <div></div>
      <h3>Title</h3>
      <h3>Quantity</h3>
      <h3>Price</h3>
      <div></div>
    </header>

    <!-- fill: -->
    <section class="table__contents">
      <div class="cart__item row">
        <div class="flex justify--center">
          <BaseCard>
            <img class="cart__item__cover" src="/covers/1001.png" />
          </BaseCard>
        </div>
        <p>The C Programming Language</p>
        <input type="number" value="1" />
        <div class="flex flex--column justify--center">$549</div>
        <div class="flex flex--column justify--center align--center gap--sm">
          <p>X</p>
        </div>
      </div>

      <div class="cart__item row">
        <div class="flex justify--center">
          <BaseCard>
            <img class="cart__item__cover" src="/covers/1001.png" />
          </BaseCard>
        </div>
        <p>The C Programming Language</p>
        <input type="number" value="1" />
        <div class="flex flex--column justify--center">$549</div>
        <div class="flex flex--column justify--center align--center gap--sm">
          <p>X</p>
        </div>
      </div>
    </section>
  </BaseCard>
</template>

<style scoped>
  .table__widget {
    width: max-content;
  }

  .table__widget .row {
    display: grid;
    /* FIXME: replace ALL of these with minmax values: */
    grid-template-columns: minmax(8em, 16em) minmax(8em, 16em) minmax(8em, 8em) minmax(8em, 16em) minmax(
        8em,
        16em
      );
  }

  .cart__item {
    border-radius: var(--default-border-radius);
    padding: 0.8em 0;
  }

  .cart__item:nth-child(odd) {
    /* background-color: var(--secondary--color); */
    background-color: var(--secondary-color);
  }

  .cart__item__cover {
    max-height: 10em;
  }
</style>
