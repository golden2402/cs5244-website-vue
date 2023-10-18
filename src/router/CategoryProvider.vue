<script setup lang="ts">
  import { provide } from "vue";
  import { type CategoryGroup } from "@/types";

  import IconBeaker02 from "@/assets/icons/genres/IconBeaker02.vue";
  import IconBriefcase01 from "@/assets/icons/genres/IconBriefcase01.vue";
  import IconCodeSnippet02 from "@/assets/icons/genres/IconCodeSnippet02.vue";
  import IconGamingPad02 from "@/assets/icons/genres/IconGamingPad02.vue";

  import { useCategoryStore } from "@/stores/category";

  useCategoryStore().fetchCategories();

  // in-order category grouping for dropdowns--need to hardcode this because we
  // can't modify the database schema:
  const categoryGroups: readonly CategoryGroup[] = [
    {
      name: "Programming",
      icon: IconCodeSnippet02,
      categoryIds: [1001, 1002, 1003]
    },
    {
      name: "Career",
      icon: IconBriefcase01,
      categoryIds: [1004, 1005]
    },
    {
      name: "Education",
      icon: IconBeaker02,
      categoryIds: [1006, 1007, 1008, 1009]
    },
    {
      name: "Entertainment",
      icon: IconGamingPad02,
      categoryIds: [1010, 1011]
    }
  ];

  provide<readonly CategoryGroup[]>("categoryGroups", categoryGroups);
</script>

<template>
  <slot></slot>
</template>
