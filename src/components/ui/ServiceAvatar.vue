<template>
  <section>
    <span
      v-for="dev in $props.developers.slice(0, maxAvatarsPerRow)"
      :key="dev.id"
    >
      <img
        :alt="'dev avatar for' + dev.name"
        :src="dev.avatar"
      >
    </span>
    <span
      v-if="totalLength > maxAvatarsPerRow"
      class="max"
    >
      + {{ totalLength - maxAvatarsPerRow }}
    </span>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Developer } from 'types'

const maxAvatarsPerRow = 2
const props = defineProps<{ developers: Developer[] }>()
const totalLength = computed(() => props.developers.length)
</script>

<style lang="scss" scoped>
section {
  display: inline-flex;
  flex-direction: row-reverse;
  width: auto;

  span {
    border-radius: $border-radius-round;
    height: $icon-size-lg;
    overflow: hidden;
    position: relative;
    width: $icon-size-lg;

    &:not(:last-child) {
      margin-left: spacing(-4);
    }

    img {
      display: block;
      width: 100%;
    }

    &.max {
      align-items: center;
      background-color: $icon-background-color;
      border: 2px solid $white-background-color;
      color: $icon-text-color;
      display: inline-flex;
      font-size: $font-size-xs;
      font-weight: $font-weight-semibold;
      justify-content: center;
    }
  }

}
</style>
