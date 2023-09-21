<script setup lang="ts">
  import BaseCard from "@/components/BaseCard.vue";

  import Divider from "@/components/BaseDivider.vue";

  import HoverDropdown from "@/components/BaseHoverDropdown.vue";
  import GenreListDropdown from "@/components/GenreListDropdown.vue";

  import IconChevronDown from "@/assets/icons/IconChevronDown.vue";
  import IconFolder from "@/assets/icons/IconFolder.vue";
  import IconShoppingCart02 from "@/assets/icons/IconShoppingCart02.vue";
  import IconSearch from "@/assets/icons/IconSearch.vue";
  import IconUser from "@/assets/icons/IconUser.vue";
</script>

<template>
  <header class="flex justify--between align--center">
    <RouterLink to="/" class="title flex align--center gap--sm">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="25" height="25" />
      <h2>Bookmart</h2>
    </RouterLink>

    <nav class="flex align--stretch gap--sm">
      <div class="box--secondary flex align--center">
        <input placeholder="Search" />
        <IconSearch />
      </div>
      <HoverDropdown>
        <template #content>
          <div class="box--primary flex align--center gap--sm">
            <IconFolder />
            Genres
            <IconChevronDown />
          </div>
        </template>
        <template #dropdown>
          <GenreListDropdown />
        </template>
      </HoverDropdown>
      <Divider />
      <div class="box--primary flex align--center gap--sm">
        <IconShoppingCart02 />
        Cart
      </div>
      <HoverDropdown>
        <template #content>
          <div class="box--primary flex align--center gap--sm account">
            <IconUser />
            YourUsernameHere
            <IconChevronDown />
          </div>
        </template>
        <template #dropdown>
          <BaseCard class="flex flex--column gap--xs">
            <ul>
              <RouterLink to="">
              <li><p>My Account</p></li>
              </RouterLink>
              <RouterLink to="">
                <li><p>Bookmarks</p></li>
              </RouterLink>
              <Divider horizontal class="account__divider" />
              <RouterLink to="">
                <li><p class="account__logout">Log Out</p></li>
              </RouterLink>
            </ul>
          </BaseCard>
        </template>
      </HoverDropdown>
    </nav>
  </header>
</template>

<style scoped>
  header {
    position: sticky;
    top: 0;
  }

  .account {
    background-color: var(--success-color);
  }

  .account__divider {
    margin: 0.4em 0;
  }

  .account__logout {
    color: var(--danger-color);
  }
</style>
