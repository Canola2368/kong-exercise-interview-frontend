<template>
  <section
    v-if="!error"
    data-testid="no-errors"
  >
    <div v-if="paginatedServices.length > 0">
      <ul>
        <li
          v-for="service in paginatedServices"
          :key="service.id"
          class="service"
        >
          <ServiceArticle :service="service" />
        </li>
      </ul>
      <ServicePagination
        :paginated-services="paginatedServices"
        :pagination="pagination"
        :total="filteredServices.length"
      />
    </div>
    <ServiceNoResults v-else />
  </section>
  <ServiceError
    v-else
    data-testid="valid-error"
    :error="error"
  />
</template>

<script setup lang="ts">
import type { Service } from 'types'
import ServiceArticle from './ServiceArticle.vue'
import ServiceError from '../ui/ServiceError.vue'
import ServiceNoResults from '../ui/ServiceNoResults.vue'
import { ref, computed } from 'vue'
import usePagination from '../../composables/usePagination'
import ServicePagination from './ServicePagination.vue'

const props = defineProps<{
  filteredServices: Service[];
  error: string | null;
}>()

const currentPage = ref(1)
const itemsPerPage = 9

const pagination = usePagination(props.filteredServices.length, { currentPage: currentPage.value, itemsPerPage })

const paginatedServices = computed(() => {
  const startIndex = pagination.startIndex.value
  const endIndex = pagination.endIndex.value
  return props.filteredServices.slice(startIndex, endIndex)
})
</script>

<style lang="scss" scoped>
section {
  margin: spacing(6) spacing(0);

  div>ul {
    gap: spacing(10);
    padding: spacing(0);
    width: 100%;
    @include grid-layout;

    li {
      background-color: $white-background-color;
      border-radius: $border-radius-xs;
      display: flex;
      flex-direction: column;
      list-style-type: none;
      padding: spacing(5);
    }
  }
}
</style>
