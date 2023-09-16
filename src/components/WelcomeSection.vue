<script setup lang="ts">
  import { RouterLink } from "vue-router";
  import QuickstartCard from "./QuickstartCard.vue";

  import IconFolder from "@/assets/icons/IconFolder.vue";
  import IconSearch from "@/assets/icons/IconSearch02.vue";

  import IconArrow from "@/assets/icons/IconArrow.vue";
</script>

<template>
  <div class="quickstart flex flex--column align--stretch gap--xl">
    <header class="eyecatcher flex flex--column justify--end">
      <h1 class="title">Every book you would ever need, all in one place</h1>
      <p class="blurb">Bookmart serves dedicated readers searching for their perfect book.</p>
    </header>
    <div class="navigation flex flex--column gap--md">
      <header class="navigation__header">
        <h3 class="title">Get Started</h3>
        <p>Search by...</p>
      </header>

      <div class="flex gap--md">
        <QuickstartCard
          class="card--hover"
          title="Title"
          blurb="Find exactly what you need in seconds."
        >
          <template #icon>
            <IconSearch />
          </template>
        </QuickstartCard>
        <QuickstartCard class="card--hover" title="Genre" blurb="Find something new.">
          <template #icon>
            <IconFolder />
          </template>
        </QuickstartCard>
      </div>

      <RouterLink to="/category">
        <div class="cta box--primary flex justify--between align--center">
          <h1 class="cta__title">Start Shopping</h1>
          <IconArrow class="arrow" width="36" height="36" />
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

  .quickstart__card {
    flex: 1;
    height: min-content;
  }

  .eyecatcher .title {
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
