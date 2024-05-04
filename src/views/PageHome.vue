<template>
  <NavigationBar />
  <!-- todo: add auto expand main content -->
  <main class="container-centered">
    <ServiceCatalog />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ServiceCatalog from '@/components/ServiceCatalog.vue'
import NavigationBar from '@/components/navigation/NavigationBar.vue'

export default defineComponent({
  name: 'PageHome',
  components: {
    ServiceCatalog,
    NavigationBar,
  },
})
</script>

<style lang="scss" scoped>
main {
  margin-top: 3rem;

  @include media-lg {
    margin-top: 0;
  }
}
</style>
