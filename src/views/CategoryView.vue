<script setup lang="ts">
  import CategorySelectionList from "@/components/CategorySelectionList.vue";
</script>

<template>
  <main class="container flex">
    <section>
      <!-- replace with the same component as the dropdown? -->
    </section>
    <CategorySelectionList :id="Number($route.params.id)" />
  </main>
</template>

<style></style>
