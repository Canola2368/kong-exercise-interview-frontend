<template>
  <section>
    <button
      :disabled="pagination.currentPage.value === 1"
      @click="pagination.prevPage"
    >
      <BackIcon />
    </button>
    <div>
      <span>{{ pagination.startIndex.value + 1 }} to {{ pagination.endIndex.value }}</span>
      of {{ total }} services
    </div>
    <button
      :disabled="pagination.currentPage.value === pagination.totalPages.value"
      @click="pagination.nextPage"
    >
      <ForwardIcon />
    </button>
  </section>
</template>

<script setup lang="ts">
import type { PaginationState } from '@/composables/usePagination'
import type { Service } from 'types'
import { ForwardIcon, BackIcon } from '@kong/icons'

defineProps<{ paginatedServices: Service[], pagination: PaginationState, total: number }>()
</script>

<style scoped lang="scss">
section {
  align-items: center;
  display: flex;
  gap: spacing(6);
  justify-content: center;
  margin-top: spacing(6);

  >button {
    align-items: center;
    appearance: none;
    background-color: transparent;
    border: 1px solid $palette-blue-250;
    border-radius: $border-radius-rounded-button;
    color: $palette-blue-500;
    cursor: pointer;
    display: inline-flex;
    justify-content: center;
    padding: spacing(3);

    >span:has(svg) {
      height: $icon-size-xs !important;
      width: $icon-size-xs !important;
    }

    &:disabled {
      border: 1px solid $icon-black-100-background-color;
      color: $icon-black-text-color;
      cursor: not-allowed;
    }
  }

  div {
    color: $text-color;
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    opacity: 0.7;

    >span {
      color: $heading-color;
      font-weight: $font-weight-semibold;
    }
  }
}
</style>
