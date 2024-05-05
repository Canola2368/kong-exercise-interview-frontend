<template>
  <a
    :class="computedClasses"
    :href="computedHref.href"
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

const computedHref = computed(() => ({
  href: props.length === 0 ? undefined : `/services/${props.id}`,
}))

const computedClasses = computed(() => ({
  hidden: props.length === 0,
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
  text-decoration: none;
  white-space: nowrap;
  width: fit-content;

  &.hidden {
    visibility: hidden;
  }
}
</style>
