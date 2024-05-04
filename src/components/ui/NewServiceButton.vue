<template>
  <button>
    <AddIcon />
    <span>Service Package</span>
  </button>
</template>

<script setup lang="ts">
import { AddIcon } from '@kong/icons'
</script>

<style lang="scss" scoped>
button {
  align-items: center;
  appearance: none;
  background-color: $accent-color;
  border: none;
  border-radius: $border-radius-rounded-button;
  color: $text-color-reversed;
  column-gap: spacing(2);
  cursor: pointer;
  display: inline-flex;
  font-weight: $font-weight-semibold;
  justify-content: center;
  padding: spacing(3) spacing(6) spacing(3) spacing(4);
}
</style>
