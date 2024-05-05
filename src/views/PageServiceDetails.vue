<template>
  <div class="modal">
    <p>Hello from the modal!</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PageServiceDetails',
})
</script>

<style scoped>
.modal {
  left: 50%;
  margin-left: -150px;
  position: fixed;
  top: 20%;
  width: 300px;
  z-index: 999;
}
</style>
