<template>
  <a
    :data-testid="label"
    :href="link"
  >
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
  color: $text-color-reversed;
  display: flex;
  font-size: $font-size-sm;
  gap: spacing(3);
  opacity: 0.8;
  padding: spacing(3) spacing(2);
  text-decoration: none;
  text-transform: capitalize;
  transition: opacity 0.1s ease-in-out;

  &:hover {
    opacity: 1;
  }

  div {
    align-items: center;
    display: inline-flex;
    height: $icon-size-sm;
    justify-content: center;
    width: $icon-size-sm;
  }

  span {
    font-weight: $font-weight-semibold;
  }
}
</style>
