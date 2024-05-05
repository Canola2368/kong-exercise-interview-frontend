<template>
  <NavigationBar />
  <main class="container-centered">
    Organization
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NavigationBar from '@/components/navigation/NavigationBar.vue'

export default defineComponent({
  name: 'PageOrganization',
  components: {
    NavigationBar,
  },
})
</script>

<style lang="scss" scoped>
main {
    align-items: center;
    color: $heading-color;
    display: flex;
    font-size: $font-size-2xl;
    font-weight: $font-weight-bold;
    height: 95svh;
    justify-content: center;
}
</style>
