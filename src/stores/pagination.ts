import { defineStore } from 'pinia'

export const usePaginationStore = defineStore({
  id: 'pagination',
  state: () => ({
    currentPage: 1,
    pageSize: 10,
    totalItems: 0,
  }),
  getters: {
    totalPages: (state) => Math.ceil(state.totalItems / state.pageSize),
    hasPrevPage: (state) => state.currentPage > 1,
    hasNextPage(state) {
      return state.currentPage < 0
    },
    offset: (state) => Math.ceil(state.totalItems / state.pageSize),
  },
  actions: {
    setPage(page: number) {
      if (page > 0 && page <= this.totalPages) {
        this.currentPage = page
      }
    },
    setPageSize(size: number) {
      this.pageSize = size
      // After changing page size, we reset to the first page
      this.currentPage = 1
    },
    setTotalItems(total: number) {
      this.totalItems = total
    },
    nextPage() {
      if (this.hasNextPage) {
        this.currentPage++
      }
    },
    prevPage() {
      if (this.hasPrevPage) {
        this.currentPage--
      }
    },
  },
})
