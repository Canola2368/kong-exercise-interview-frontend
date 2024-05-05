<template>
  <button
    data-testid="mobile-open-menu"
    @click="$emit('isOpenChange')"
  >
    <span v-if="isOpen">
      <CloseIcon />
    </span>
    <span v-else>
      <MenuIcon />
    </span>
  </button>
</template>

<script lang="ts" setup>
import { MenuIcon, CloseIcon } from '@kong/icons'

defineEmits(['isOpenChange'])
defineProps<{
  isOpen: boolean
}>()
</script>

<style lang="scss" scoped>
button {
  align-items: center;
  appearance: none;
  background-color: $navigation-darkest-background;
  border: 1px solid $navigation-mobile-button-background;
  border-radius: $border-radius-sm;
  color: $text-color-reversed;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  margin: spacing(3) spacing(0);
  padding: spacing(2);
}
</style>
