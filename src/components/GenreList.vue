<script setup lang="ts">
  import { inject } from "vue";
  import { useCategoryStore } from "@/stores/category";

  import type { CategoryGroup } from "@/types";

  import { RouterLink } from "vue-router";

  const categoryList = useCategoryStore().categoryList;
  const categoryGroups = inject("categoryGroups") as readonly CategoryGroup[];

  // TODO: need a way to categorize by "other" (categories that exist in
  // categoryList but not categoryGroups)
</script>

<template>
  <ul
    v-for="(group, i) in categoryGroups"
    v-bind:key="`genre-list-${i}`"
    class="flex flex--column gap--xs"
  >
    <li class="genre__item__header flex align--center gap--sm">
      <h3 class="title">{{ group.name }}</h3>
      <div class="divider"></div>
      <component :is="group.icon" width="20" height="20" />
    </li>
    <li
      class="genre__item"
      v-for="categoryId in group.categoryIds"
      v-bind:key="`selection-${categoryId}`"
    >
      <RouterLink :to="`/category/${categoryList.get(categoryId)}`">
        <slot name="link" :categoryName="categoryList.get(categoryId)"></slot>
      </RouterLink>
    </li>
  </ul>
</template>

<style scoped>
  .genre__item__header .title {
    font-size: 1em;
    text-transform: uppercase;
  }

  .divider {
    flex-grow: 1;
    height: 1px;

    background-color: black;
  }
</style>
