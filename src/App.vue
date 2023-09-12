<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="page flex flex--column">
    <header class="flex justify--between align--center">
      <RouterLink to="/" class="title flex align--center gap--small">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
        <h2>Bookmart</h2>
      </RouterLink>

      <div class="wrapper">
        <nav></nav>
      </div>
    </header>

    <RouterView class="page__slot" />

    <footer class="flex justify--between align--center"></footer>
  </div>
</template>

<style scoped>
/* header */
header {
  padding: 1em;
}

header .title {
  height: 100%;
}

/* footer */
footer {
  padding: 1em;
}

/* page utility */
.page {
  min-height: 100vh;
}

.page__slot {
  flex-grow: 1;
}
</style>
