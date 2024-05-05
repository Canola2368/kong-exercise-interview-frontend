<template>
  <div class="main">
    <header>
      <div>
        <h1>Service Hub</h1>
        <p>Organize services, manage and track versioning and API service documentation. <a href="/">Learn more</a></p>
      </div>

      <aside>
        <ServiceInput
          v-model="searchQuery"
          @update-query="handleInputChange(searchQuery)"
        />
        <NewServiceButton />
      </aside>
    </header>
    <div
      v-if="loading"
      class="loading"
      data-testid="loading"
    >
      <template
        v-for="n in 9"
        :key="n"
      >
        <ServiceLoading />
      </template>
    </div>
    <ServiceList
      v-else
      :error="error"
      :filtered-services="filteredServices"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import useFilteredServices from '@/composables/useFilteredServices'
import NewServiceButton from '../ui/NewServiceButton.vue'
import ServiceInput from '../ui/ServiceInput.vue'
import ServiceLoading from '../ui/ServiceLoading.vue'
import ServiceList from './ServiceList.vue'
import useDebounce from '@/composables/useDebounce'

// Initialize the searchQuery ref
const searchQuery = ref('')

const { filteredServices, loading, error, filterServices } = useFilteredServices()

const debouncedSearch = useDebounce((v: string) => {
  if (v.trim() !== '') {
    filterServices(v)
  }
}, 2000)

function handleInputChange(value: string) {
  debouncedSearch(value)
}
</script>

<style lang="scss" scoped>
div.main {
  margin-top: spacing(30);

  @include breakpoint('lg') {
    margin-top: spacing(13);
  }
}

div.loading {
  @include grid-layout();
  column-gap: spacing(6);
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
