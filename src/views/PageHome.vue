<template>
  <router-view />
  <NavigationBar />
  <!-- todo: add auto expand main content -->
  <main class="container-centered">
    <ServiceCatalog />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ServiceCatalog from '@/components/list/ServiceCatalog.vue'
import NavigationBar from '@/components/navigation/NavigationBar.vue'

export default defineComponent({
  name: 'PageHome',
  components: {
    ServiceCatalog,
    NavigationBar,
  },
})
</script>

<style lang="scss">
body:has(>section.mask) {
  overflow: hidden;
}
</style>
