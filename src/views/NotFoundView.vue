<script setup lang="ts">
  import { useRouter } from "vue-router";
  
  const router = useRouter();
</script>

<template>
  <div class="error__page container flex flex--column align--center gap--md">
    <div>
      <h1 class="error__header">Uh oh!</h1>
      <p class="error__subtext">Looks like you ended up somewhere that you shouldn&apos;t be.</p>
    </div>
    <button @click="router.back()" class="error__return__button" to="/">
      <div class="box--secondary hover">Back to safety</div>
    </button>
  </div>
</template>

<style scoped>
  .error__page {
    padding: 4em;
  }

  .error__header {
    text-align: center;
    line-height: 1;
    font-weight: 600;
  }

  .error__subtext {
  }

  .error__return__subtext {
    font-size: 1.1em;
    font-weight: 500;
  }

  .error__return__button {
    text-align: center;
    width: 100%;
  }
</style>
