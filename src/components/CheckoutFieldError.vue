<script setup lang="ts">
  import type { BaseValidation } from "@vuelidate/core";

  const { fieldName } = defineProps<{
    fieldName: BaseValidation;
  }>();
</script>

<template>
  <template v-if="fieldName.$error">
    <!-- <div class="error" v-for="error of fieldName.$errors" :key="error.$uid">
      {{ error.$message }}
    </div> -->
    <div class="error">{{ fieldName.$errors[0].$message }}</div>
  </template>
</template>

<style scoped>
  .error {
    color: var(--danger-color);
    font-size: 0.9em;
  }
</style>
