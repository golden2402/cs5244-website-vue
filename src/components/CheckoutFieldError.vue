<script setup lang="ts">
  import { defineProps } from "vue";
  import type { BaseValidation } from "@vuelidate/core";

  const { fieldName } = defineProps<{
    fieldName: BaseValidation;
  }>();
</script>

<template>
  <template v-if="fieldName.$error">
    <div class="error" v-for="error of fieldName.$errors" :key="error.$uid">
      {{ error.$message }}
    </div>
  </template>
</template>

<style scoped>
  .error {
    color: var(--danger-color);
    font-size: 0.9em;
  }
</style>
