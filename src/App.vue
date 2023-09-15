<script setup lang="ts">
  import { RouterLink, RouterView } from "vue-router";

  import { provide } from "vue";
  import { type BookItem, type CategoryGroup } from "@/types";

  import Divider from "./components/BaseDivider.vue";

  import FooterLinkSection from "@/components/FooterLinkSection.vue";
  import FooterLink from "./components/FooterLink.vue";
  import SocialMediaLink from "@/components/SocialMediaLink.vue";

  import IconFacebook from "@/assets/icons/socials/IconFacebook.vue";
  import IconInstagram from "@/assets/icons/socials/IconInstagram.vue";
  import IconX from "@/assets/icons/socials/IconX.vue";

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

  const bookList = new Map<number, BookItem>().set(1001, {
    cover: "https://www0.alibris-static.com/c-programming-language/isbn/9780131103627_l.jpg",
    title: "C Programming Language",
    price: 19.99,
    authors: ["Dennis Ritchie", "Brian Kernighan"],
    isPublic: true
  });

  provide("bookList", bookList);
</script>

<template>
  <div class="page flex flex--column">
    <header class="flex justify--between align--center">
      <RouterLink to="/" class="title flex align--center gap--sm">
        <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
        <h2>Bookmart</h2>
      </RouterLink>

      <div class="wrapper">
        <nav></nav>
      </div>
    </header>

    <main class="page__body flex">
      <RouterView />
    </main>

    <footer class="flex justify--between align--center">
      <p class="copyright">&copy; John Golden 2023</p>
      <div class="footer__links flex align--stretch gap--md">
        <FooterLinkSection title="Socials">
          <div class="flex gap--md">
            <SocialMediaLink href="/">
              <IconInstagram />
            </SocialMediaLink>
            <SocialMediaLink href="/">
              <IconX />
            </SocialMediaLink>
            <SocialMediaLink href="/">
              <IconFacebook />
            </SocialMediaLink>
          </div>
        </FooterLinkSection>
        <Divider />
        <FooterLinkSection title="Links">
          <div class="flex">
            <FooterLink name="Directions" href="/directions" />
            <FooterLink name="Contact" href="/contact" />
          </div>
        </FooterLinkSection>
      </div>
    </footer>
  </div>
</template>

<style scoped>
  header,
  footer {
    padding: 1em;

    background-color: var(--foreground-color);
    outline: var(--default-outline);
    box-shadow: var(--default-box-shadow);
  }

  /* header */
  header .title {
    height: 100%;
  }

  footer .copyright {
    color: var(--text-color-mute);
  }

  footer .footer__links {
    font-size: 0.9em;
  }

  /* page utility */
  .page {
    min-height: 100vh;
  }

  .page__body {
    flex-grow: 1;
  }
</style>
