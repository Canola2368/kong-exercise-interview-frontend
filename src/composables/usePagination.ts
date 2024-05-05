import type { ComputedRef } from 'vue'
import { ref, computed } from 'vue'

interface PaginationOptions {
  currentPage: number;
  itemsPerPage: number;
}

export interface PaginationState {
  currentPage: ComputedRef<number>;
  startIndex: ComputedRef<number>;
  endIndex: ComputedRef<number>;
  goToPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  totalPages: ComputedRef<number>;
}

export default function usePagination(
  totalItems: number,
  options: PaginationOptions,
): PaginationState {
  const currentPage = ref(options.currentPage)
  const totalPages = computed(() => Math.ceil(totalItems / options.itemsPerPage))

  const startIndex = computed(() => {
    return (currentPage.value - 1) * options.itemsPerPage
  })

  const endIndex = computed(() => {
    return Math.min(startIndex.value + options.itemsPerPage, totalItems)
  })

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages.value) {
      currentPage.value = page
    }
  }

  const nextPage = () => {
    if (currentPage.value < totalPages.value) {
      currentPage.value++
    }
  }

  const prevPage = () => {
    if (currentPage.value > 1) {
      currentPage.value--
    }
  }

  return {
    currentPage: computed(() => currentPage.value),
    startIndex,
    endIndex,
    goToPage,
    nextPage,
    prevPage,
    totalPages,
  }
}
