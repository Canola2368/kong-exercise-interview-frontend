<template>
  <a :href="link">
    <div>
      <img
        alt="logo"
        src="/img/account.svg"
      >
    </div>
    <span>
      {{ name }}
    </span>
  </a>
</template>

<script lang="ts" setup>
defineProps<{
  link: string
  name: string
}>()
</script>

<style lang="scss" scoped>
a {
  align-items: center;
  color: $kui-color-text-inverse;
  column-gap: 0.75rem;
  cursor: pointer;
  display: flex;
  font-size: $kui-font-size-30;
  justify-content: center;
  padding: 0.75rem 0.5rem;

  font-weight: $kui-font-weight-semibold;
  text-transform: capitalize;

  @include media-lg {
    background-color: #072863;
    margin-left: 1rem;
    padding: 1.25rem;
    column-gap: 1rem;
  }

  >div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: $kui-icon-size-40;
    width: $kui-icon-size-40;

    @include media-lg {
      background-color: #0A7FAE;
      border-radius: $kui-border-radius-circle;
      height: $kui-icon-size-60;
      width: $kui-icon-size-60;
      padding: 0.5rem;
    }
  }

  >span {
    opacity: 0.8;
    transition: opacity 0.1s ease-in-out;

    &:hover {
      opacity: 1;
    }

    @include media-lg {
      font-weight: $kui-font-weight-medium;
    }
  }
}
</style>
