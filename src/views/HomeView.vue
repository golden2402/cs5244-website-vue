<script setup lang="ts">
  import WelcomeSection from "@/components/WelcomeSection.vue";
  import FeatureSection from "@/components/FeatureSection.vue";
</script>

<template>
  <div class="home container flex">
    <section>
      <WelcomeSection />
    </section>
    <section>
      <FeatureSection />
    </section>
  </div>
</template>

<style scoped>
  .home > * {
    flex: 1;
    padding: 6em;
  }
</style>
