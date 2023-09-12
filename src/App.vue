<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="page">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/category">Category</RouterLink>
        </nav>
      </div>
    </header>

    <div class="page">
      <RouterView class="page__slot" />
      <footer>

      </footer>
    </div>
  </div>
</template>

<style scoped>
.page {
  display: flex;
  flex-direction: column;
}

.page__slot {
  flex-grow: 1;
}
</style>
