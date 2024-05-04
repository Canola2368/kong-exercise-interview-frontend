<template>
  <div class="main">
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
    <div v-if="loading">
      <ServiceLoading />
      <ServiceLoading />
      <ServiceLoading />
    </div>
    <ServiceList
      v-else
      :error="error"
      :filtered-services="filteredServices"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import useFilteredServices from '@/composables/useFilteredServices'
import NewServiceButton from '../ui/NewServiceButton.vue'
import ServiceInput from '../ui/ServiceInput.vue'
import ServiceLoading from '../ui/ServiceLoading.vue'
import ServiceList from './ServiceList.vue'

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
div.main {
  margin-top: spacing(30);

  >div {
    column-gap: spacing(6);
    display: grid;
    @include grid-layout;
  }

  @include breakpoint('lg') {
    margin-top: spacing(13);
  }
}

header {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: spacing(6);

  @include breakpoint('lg') {
    flex-direction: row;
    gap: spacing(10);
    justify-content: space-between;
  }

  >div {
    display: flex;
    flex-direction: column;
    gap: spacing(4);

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
    display: flex;
    flex-direction: column;
    gap: spacing(6);
    width: 100%;

    >* {
      width: 100%
    }

    @include breakpoint('lg') {
      flex-direction: row;
      width: auto;

      >* {
        width: auto
      }
    }
  }
}
</style>
