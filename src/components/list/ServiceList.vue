<template>
  <section v-if="!error">
    <ul v-if="filteredServices.length > 0">
      <li
        v-for="service in filteredServices"
        :key="service.id"
        class="service"
      >
        <ServiceArticle :service="service" />
      </li>
    </ul>
    <div v-else>
      No services
    </div>
  </section>
  <ServiceError
    v-else
    :error="error"
  />
</template>

<script setup lang="ts">
import type { Service } from 'types'
import ServiceArticle from './ServiceArticle.vue'
import ServiceError from '../ui/ServiceError.vue'

defineProps<{
  filteredServices: Service[]
  error: string | null
}>()
</script>

<style lang="scss" scoped>
section {
  margin-top: spacing(6);

  ul {
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
