<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<style scoped>
  .card {
    padding: 0.6em;

    background-color: var(--foreground-color);

    outline: var(--default-outline);
    border-radius: var(--default-border-radius);

    box-shadow: var(--default-box-shadow);
    transition: box-shadow 0.2s;
  }

  .card h1,
  .card h2,
  .card h3 {
    line-height: 1.2;
  }

  .card__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .card__title {
    flex-grow: 1;
    text-transform: uppercase;
  }

  .card.card--hover:hover {
    box-shadow: var(--default-box-shadow-heavy);
  }
</style>
