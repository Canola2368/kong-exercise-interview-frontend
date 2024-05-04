<template>
  <a :href="link">
    <div>
      <slot name="icon" />
    </div>
    <span>
      {{ label }}
    </span>
  </a>
</template>

<script lang="ts" setup>
defineProps<{
  link: string
  label: string
}>()
</script>

<style lang="scss" scoped>
a {
  align-items: center;
  background-color: transparent;
  color: $kui-color-text-inverse;
  column-gap: 0.75rem;
  display: flex;
  font-size: $kui-font-size-30;
  opacity: 0.8;
  padding: 0.75rem 0.5rem;
  text-decoration: none;
  text-transform: capitalize;
  transition: opacity 0.1s ease-in-out;

  &:hover {
    opacity: 1;
  }

  div {
    height: $kui-icon-size-40;
    width: $kui-icon-size-40;
  }

  span {
    font-weight: $kui-font-weight-semibold;
  }
}
</style>
