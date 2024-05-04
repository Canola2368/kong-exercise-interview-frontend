<template>
  <span
    :class="visibilityHiddenClass"
  >
    {{ length }} versions
  </span>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  length: number
}>()

const visibilityHiddenClass = computed(() => ({
  hidden: props.length === 0,
}))
</script>

<style lang="scss" scoped>
span {
  background-color: $palette-blue-100;
  border-radius: $border-radius-rounded-button;
  color: $palette-blue-300;
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  padding: spacing(2) spacing(4);
  white-space: nowrap;
  width: fit-content;

  &.hidden {
    visibility: hidden;
  }
}
</style>
