<script setup lang="ts">
  import { RouterView } from "vue-router";

  import CategoryProvider from "./router/CategoryProvider.vue";

  import PageHeader from "@/components/PageHeader.vue";
  import PageFooter from "@/components/PageFooter.vue";
</script>

<template>
  <Suspense>
    <CategoryProvider>
      <div class="page flex flex--column">
        <PageHeader />

        <main class="page__body flex">
          <RouterView />
        </main>

        <PageFooter />
      </div>
    </CategoryProvider>
  </Suspense>
</template>

<style scoped>
  /* FIXME: disjoint from components--maybe move? */
  header,
  footer {
    padding: 1em;

    background-color: var(--foreground-color);
    outline: var(--default-outline);
    box-shadow: var(--default-box-shadow);
  }

  /* page utility */
  .page {
    min-height: 100vh;
  }

  .page__body {
    flex-grow: 1;
  }
</style>
