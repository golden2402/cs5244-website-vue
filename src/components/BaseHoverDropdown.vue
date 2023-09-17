<template>
  <div class="dropdown__seat">
    <div class="dropdown__base">
      <slot name="content"></slot>
    </div>
    <div class="dropdown__menu">
      <slot name="dropdown"></slot>
    </div>
  </div>
</template>

<style scoped>
  .dropdown__base {
    cursor: pointer;
  }

  .dropdown__seat {
    position: relative;
  }

  .dropdown__menu {
    z-index: 10;

    position: absolute;
    top: 100%;
    left: calc(50%);

    min-width: 100%;

    opacity: 0;
    transform: translate(-50%, calc(-50% - 0.5em)) scaleY(0);

    transition-property: opacity, transform;
    transition-duration: 200ms;
  }

  .dropdown__seat:hover .dropdown__menu {
    opacity: 1;
    transform: translate(-50%, 0) scaleY(100%);
  }
</style>
