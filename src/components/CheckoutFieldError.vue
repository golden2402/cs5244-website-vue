<script setup lang="ts">
  import { defineProps } from "vue";
  import type { BaseValidation } from "@vuelidate/core";

  const { fieldName } = defineProps<{
    fieldName: BaseValidation;
  }>();
</script>

<style scoped>
  form > .error {
    color: var(--danger-color);
    text-align: right;
  }
</style>

<template>
  <template v-if="fieldName.$error">
    <span class="error" v-for="error of fieldName.$errors" :key="error.$uid">
      {{ error.$message }}
    </span>
  </template>
</template>
