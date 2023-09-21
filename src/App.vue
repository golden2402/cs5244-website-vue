<script setup lang="ts">
  import { RouterView } from "vue-router";

  import { provide } from "vue";
  import { type BookItem, type CategoryGroup } from "@/types";

  import PageHeader from "@/components/PageHeader.vue";
  import PageFooter from "@/components/PageFooter.vue";

  import IconBeaker02 from "@/assets/icons/genres/IconBeaker02.vue";
  import IconBriefcase01 from "@/assets/icons/genres/IconBriefcase01.vue";
  import IconCodeSnippet02 from "@/assets/icons/genres/IconCodeSnippet02.vue";
  import IconGamingPad02 from "@/assets/icons/genres/IconGamingPad02.vue";

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
      icon: IconCodeSnippet02,
      categoryIds: [1001, 1002, 1003]
    },
    {
      name: "Career",
      icon: IconBriefcase01,
      categoryIds: [2001, 2002]
    },
    {
      name: "Education",
      icon: IconBeaker02,
      categoryIds: [3001, 3002, 3003, 3004]
    },
    {
      name: "Entertainment",
      icon: IconGamingPad02,
      categoryIds: [4001, 4002]
    }
  ];

  provide<Map<number, string>>("categoryList", categoryList);
  provide<readonly CategoryGroup[]>("categoryGroups", categoryGroups);

  const bookList = new Map<number, BookItem>()
    .set(1001, {
      cover: "https://www0.alibris-static.com/c-programming-language/isbn/9780131103627_l.jpg",
      title: "C Programming Language",
      price: 12.99,
      authors: ["Dennis Ritchie", "Brian Kernighan"],
      categories: [1001],
      isPublic: true
    })
    .set(1002, {
      cover: "https://www3.alibris-static.com/algorithms-to-live-by-the-computer-science-of-human-decisions/isbn/9781250118363_l.jpg",
      title: "Algorithms to Live By: The Computer Science of Human Decisions",
      price: 19.99,
      authors: ["Brian Christian", "Tom Griffiths"],
      categories: [1001],
      isPublic: false
    })
    .set(1003, {
      cover: "https://www2.alibris-static.com/the-go-programming-language/isbn/9780134190440_l.jpg",
      title: "The Go Programming Language",
      price: 19.99,
      authors: ["Alan Donovan", "Brian Kernighan"],
      categories: [1001],
      isPublic: false
    })
    .set(1004, {
      cover: "https://www2.alibris-static.com/c-programming-a-modern-approach/isbn/9780393979503_l.jpg",
      title: "C Programming: A Modern Approach",
      price: 12.99,
      authors: ["Dennis Ritchie", "Brian Kernighan"],
      categories: [1001],
      isPublic: true
    });

  const bookCategories = new Map<number, BookItem[]>();
  // read from the current set of books, generate map of category ids to books:
  for (const bookItem of bookList.values()) {
    for (const category of bookItem.categories) {
      const categoryList = bookCategories.get(category);

      if (categoryList) {
        categoryList.push(bookItem);
      } else {
        bookCategories.set(category, [bookItem]);
      }
    }
  }

  provide<Map<number, BookItem>>("bookList", bookList);
  provide<Map<number, BookItem[]>>("bookCategories", bookCategories);
</script>

<template>
  <div class="page flex flex--column">
    <PageHeader />

    <main class="page__body flex">
      <RouterView />
    </main>

    <PageFooter />
  </div>
</template>

<style scoped>
  /* FIXME: disjoint from components--maybe move? */
  header,
  footer {
    padding: 1em;

    background-color: var(--foreground-color);
    outline: var(--default-outline);
    box-shadow: var(--default-box-shadow);
  }

  /* page utility */
  .page {
    min-height: 100vh;
  }

  .page__body {
    flex-grow: 1;
  }
</style>
