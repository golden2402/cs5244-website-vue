<script setup lang="ts">
import { RouterLink } from "vue-router";
import QuickstartCard from "./QuickstartCard.vue";

import vueIcon from "@/assets/logo.svg";
</script>

<template>
  <div class="quickstart flex flex--column align--center gap--large">
    <header class="eyecatcher flex flex--column justify--end">
      <h1 class="title">Every book you would ever need, all in one place</h1>
      <p class="blurb">
        Bookmart serves dedicated readers searching for their perfect book.
      </p>
    </header>
    <div class="navigation flex flex--column gap--small">
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

      <RouterLink to="/category">
        <div class="cta box--primary flex justify--between align--center">
          <h1 class="cta__title">Start Shopping</h1>
          <img
            :src="vueIcon"
            width=36
            class="arrow"
          />
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<style>
.quickstart {
  height: 100%;
}

.quickstart > * {
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
  padding: 0.6rem;
}

.cta .cta__title {
  padding-left: 0.2rem;

  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.2;

  text-transform: uppercase;
}

.arrow {
  transform: translateX(-25%);
  transition: transform 200ms;
}

.cta:hover .arrow {
  transform: translateX(0);
}
</style>
