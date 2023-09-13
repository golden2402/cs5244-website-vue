<script setup lang="ts">
import { RouterLink } from "vue-router";
import QuickstartCard from "./QuickstartCard.vue";

import vueIcon from "@/assets/logo.svg";
</script>

<template>
  <div class="flex flex--column justify--between">
    <header class="eyecatcher">
      <h1 class="title">Every book you would ever need, all in one place</h1>
      <p class="blurb">
        Bookmart serves dedicated readers searching for their perfect book.
      </p>
    </header>
    <div class="navigation">
      <header class="navigation__header">
        <h3 class="title">Get Started</h3>
        <p>Search by...</p>
      </header>

      <div class="search__types flex gap--small">
        <QuickstartCard
          :icon="vueIcon"
          title="Title" 
          blurb="Find exactly what you need in seconds."
        />
        <QuickstartCard
          :icon="vueIcon"
          title="Genre"
          blurb="Find exactly what you need in seconds."
        />
      </div>

      <RouterLink to="/category" class="cta flex justify--between align--items">
        <h1 class="cta__title">Start Shopping</h1>
        <img
          :src="vueIcon"
          width=48
          class="arrow"
        />
      </RouterLink>
    </div>
  </div>
</template>

<style>
.quickstart__options > * {
  flex: 1;
}

.eyecatcher .title {
  color: var(--primary-color);
  
  font-size: 3rem;
  line-height: 1.2;
}

.eyecatcher .blurb {
  color: var(--text-color-mute);
  font-size: 1.2rem;
}

.navigation__header {
  line-height: 1.2;
}

.navigation__header h3.title {
  color: var(--primary-color);
  text-transform: uppercase;
}

.cta {

}

.cta .cta__title {
  text-transform: uppercase;
}
</style>
