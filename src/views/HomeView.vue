<script setup lang="ts">
  import WelcomeSection from "@/components/WelcomeSection.vue";
  import FeatureSection from "@/components/FeatureSection.vue";
</script>

<template>
  <main class="container flex">
    <section>
      <WelcomeSection />
    </section>
    <section>
      <FeatureSection />
    </section>
  </main>
</template>

<style scoped>
  main > * {
    flex: 1;
    padding: 6em;
  }
</style>
