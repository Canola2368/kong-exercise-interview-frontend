<template>
  <section class="container-centered">
    <header>
      <!-- todo: add component for left section -->
      <div class="">
        <h1>Service Catalog</h1>
        <p>Organize services, manage and track versioning and API service documentation. Learn more</p>
      </div>

      <!-- todo: add component for right section -->
      <div class="">
        <form @submit.prevent="handleSubmit">
          <input
            v-model="searchQuery"
            class="search-input"
            data-testid="search-input"
            placeholder="Search services"
          >
        </form>
        <button>service package</button>
      </div>
    </header>

    <!-- todo: add component for list render and single article -->
    <span v-if="loading">LOADINGGGGGGGGGGGGGGG</span>

    <!-- todo add redering modes for exceptions -->
    <ul v-if="filteredServices.length > 0 && !loading && !error">
      <li
        v-for="service in filteredServices"
        :key="service.id"
        class="service"
      >
        <div>
          <p>{{ service.name }}</p>
          <p>{{ service.description }}</p>
        </div>
      </li>
    </ul>
    <div
      v-else
      data-testid="no-results"
    >
      No services
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import useFilteredServices from '@/composables/useFilteredServices'

// Initialize the searchQuery ref
const searchQuery = ref('')

const { filteredServices, loading, error, filterServices } = useFilteredServices()

const handleSubmit = async () => {
  await filterServices(searchQuery.value)
}

watch(filteredServices, () => { console.log('filtered services: ', filteredServices.value) })
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: space-between;
}

section {
  background-color: $kui-color-background-disabled;
  padding: 2.5rem 0;
}

ul {
  background-color: $kui-color-background-danger;
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding: 0;
  width: 100%;

  li {
    background-color: $kui-color-background;
    list-style-type: none;
    padding: $kui-space-80;
  }
}
</style>
