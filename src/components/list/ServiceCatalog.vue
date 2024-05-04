<template>
  <section class="container-centered">
    <header>
      <div>
        <h1>Service Hub</h1>
        <p>Organize services, manage and track versioning and API service documentation. <a href="/">Learn more</a></p>
      </div>

      <aside>
        <form @submit.prevent="handleSubmit">
          <ServiceInput v-model="searchQuery" />
        </form>
        <NewServiceButton />
      </aside>
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
import NewServiceButton from '../ui/NewServiceButton.vue'
import ServiceInput from '../ui/ServiceInput.vue'

// Initialize the searchQuery ref
const searchQuery = ref('')

const { filteredServices, loading, error, filterServices } = useFilteredServices()

// sanitize input ?
const handleSubmit = async () => {
  await filterServices(searchQuery.value)
}

watch(filteredServices, () => { console.log('filtered services: ', filteredServices.value) })
</script>

<style lang="scss" scoped>
section {
  margin-top: spacing(30);

  @include breakpoint('lg') {
    margin-top: spacing(13);
  }
}

header {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  row-gap: spacing(6);

  @include breakpoint('lg') {
    flex-direction: row;
    justify-content: space-between;
  }

  >div {
    display: flex;
    flex-direction: column;
    row-gap: spacing(4);

    h1 {
      color: $heading-color;
      font-size: $font-size-2xl;
      font-weight: $font-weight-bold;
      line-height: $line-height-xl;
    }

    p {
      color: $heading-color;

      a {
        color: $palette-blue-500;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }

        &:visited {
          color: $palette-blue-600;
        }
      }
    }
  }

  >aside {
    align-items: center;
    column-gap: spacing(6);
    display: flex;
  }
}

ul {
  background-color: red;
  display: grid;
  grid-gap: spacing(10);
  grid-template-columns: repeat(3, minmax(0, 1fr));
  padding: spacing(0);
  width: 100%;

  li {
    background-color: aqua;
    list-style-type: none;
    padding: spacing(3);
  }
}
</style>
