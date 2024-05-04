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
  color: $text-color-reversed;
  column-gap: spacing(3);
  cursor: pointer;
  display: flex;
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  justify-content: center;
  padding: spacing(3) spacing(2);
  text-decoration: none;
  text-transform: capitalize;

  @include breakpoint('lg') {
    background-color: $navigation-mobile-button-background;
    column-gap: spacing(4);
    margin-left: spacing(4);
    padding: spacing(5);
  }

  >div {
    align-items: center;
    display: flex;
    height: $icon-size-sm;
    justify-content: center;
    width: $icon-size-sm;

    @include breakpoint('lg') {
      background-color: $navigation-icon-background;
      border-radius: $border-radius-round;
      height: $icon-size-base;
      padding: spacing(2);
      width: $icon-size-base;
    }
  }

  >span {
    opacity: 0.8;
    transition: opacity 0.1s ease-in-out;

    &:hover {
      opacity: 1;
    }

    @include breakpoint('lg') {
      font-weight: $font-weight-medium;
    }
  }
}
</style>
