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
  display: flex;
  align-items: center;
  background-color: transparent;
  color: $kui-color-text-inverse;
  font-size: $kui-font-size-30;
  transition: opacity 0.1s ease-in-out;
  column-gap: 0.75rem;
  opacity: 0.8;
  text-decoration: none;
  padding: 0.75rem 0.5rem;
  text-transform: capitalize;

  &:hover {
    opacity: 1;
  }

  div {
    width: $kui-icon-size-40;
    height: $kui-icon-size-40;
  }

  span {
    font-weight: $kui-font-weight-semibold;
  }
}
</style>
