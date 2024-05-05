<template>
  <button
    :class="computedClasses"
    data-testid="versions-badge"
    @click="showModal = true"
  >
    {{ versions.length }} versions
  </button>
  <Teleport to="body">
    <ServiceModal
      :show="showModal"
      :versions="versions"
      @close="showModal = false"
    />
  </Teleport>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import ServiceModal from './ServiceModal.vue'
import type { ServiceVersion } from 'types'

const showModal = ref(false)

const props = defineProps<{
  id: string
  versions: ServiceVersion[]
}>()

const computedClasses = computed(() => ({
  hidden: props.versions.length === 0,
}))

</script>

<style lang="scss" scoped>
button {
  appearance: none;
  background-color: $palette-blue-100;
  border: 1px solid $palette-blue-100;
  border-radius: $border-radius-rounded-button;
  color: $palette-blue-300;
  cursor: pointer;
  font-size: $font-size-sm;
  font-weight: $font-weight-semibold;
  padding: spacing(2) spacing(4);
  text-decoration: none;
  white-space: nowrap;
  width: fit-content;

  &.hidden {
    visibility: hidden;
  }
}
</style>
