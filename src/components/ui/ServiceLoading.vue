<template>
  <section :class="props.class" />
</template>

<script setup lang="ts">
import type { HTMLAttributes } from 'vue'

interface SkeletonProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<SkeletonProps>()
</script>

<style lang="scss" scoped>
section {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  background-color: $skeleton-background-color;
  border-radius: $border-radius-base;
  height: 200px;
  margin-top: spacing(6);

  @keyframes pulse {

    0%,
    100% {
      opacity: 1;
    }

    50% {
      opacity: .5;
    }
  }
}
</style>
