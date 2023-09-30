<script setup lang="ts">
  import Divider from "./BaseDivider.vue";

  import FooterLinkSection from "@/components/FooterLinkSection.vue";
  import FooterLink from "@/components/FooterLink.vue";
  import SocialMediaLink from "@/components/SocialMediaLink.vue";

  import IconFacebook from "@/assets/icons/socials/IconFacebook.vue";
  import IconInstagram from "@/assets/icons/socials/IconInstagram.vue";
  import IconX from "@/assets/icons/socials/IconX.vue";
</script>

<template>
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
          <FooterLink name="Directions" href="/" />
          <FooterLink name="Contact" href="/" />
        </div>
      </FooterLinkSection>
    </div>
  </footer>
</template>

<style scoped>
  .copyright {
    color: var(--text-color-mute);
  }

  .footer__links {
    font-size: 0.9em;
  }
</style>
