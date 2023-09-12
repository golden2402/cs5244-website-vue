<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

import { provide } from "vue";
import { type CategoryGroup } from "@/types";

// map category id to name:
const categoryList = new Map<number, string>()
  // programming:
  .set(1001, "Coding")
  .set(1002, "Databases")
  .set(1003, "Game Design")
  // career:
  .set(2001, "Interviews")
  .set(2002, "Professional Development")
  // education:
  .set(3001, "Mathematics")
  .set(3002, "Physics")
  .set(3003, "History")
  .set(3004, "Art")
  // entertainment:
  .set(4001, "Classics")
  .set(4002, "Comics");

// in-order category grouping (for dropdowns):
const categoryGroups: readonly CategoryGroup[] = [
  {
    name: "Programming",
    icon: "@/assets/logo.svg",
    categoryIds: [1001, 1002, 1003]
  },
  {
    name: "Career",
    icon: "@/assets/logo.svg",
    categoryIds: [2001, 2002]
  },
  {
    name: "Education",
    icon: "@/assets/logo.svg",
    categoryIds: [3001, 3002, 3003, 3004]
  },
  {
    name: "Entertainment",
    icon: "@/assets/logo.svg",
    categoryIds: [4001, 4002]
  }
];

provide("categoryList", categoryList);
provide("categoryGroups", categoryGroups);
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
