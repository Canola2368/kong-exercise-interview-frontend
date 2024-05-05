<template>
  <a
    :class="computedValues.hidden"
    :href="computedValues.href"
  >
    {{ length }} versions
  </a>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

const props = defineProps<{
  id: string
  length: number
}>()

const computedValues = computed(() => ({
  hidden: props.length === 0,
  href: props.length === 0 ? undefined : `/services/${props.id}`,
}))
</script>

<style lang="scss" scoped>
a {
  background-color: $palette-blue-100;
  border-radius: $border-radius-rounded-button;
  color: $palette-blue-300;
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  padding: spacing(2) spacing(4);
  white-space: nowrap;
  width: fit-content;
  text-decoration: none;

  &.hidden {
    visibility: hidden;
  }
}
</style>
