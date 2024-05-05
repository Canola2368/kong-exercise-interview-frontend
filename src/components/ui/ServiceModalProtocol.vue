<template>
  <section>
    <div
      v-for="serviceType in serviceTypes"
      :key="serviceType"
      :class="{ inactive: serviceType !== props.type }"
    >
      {{ serviceType }}
    </div>
  </section>
</template>

<script setup lang="ts">
import { ServiceTypeEnum } from '../../../types'

const props = defineProps<{
  type: ServiceTypeEnum
}>()

const serviceTypes = [ServiceTypeEnum.Http, ServiceTypeEnum.Rest]
</script>

<style lang="scss" scoped>
section {
  align-items: center;
  display: inline-flex;
  font-size: $font-size-2xs;
  font-weight: $font-weight-medium;
  gap: spacing(2);

  div {
    background-color: $palette-blue-200;
    border-radius: $border-radius-sm;
    color: $palette-blue-600;
    padding: spacing(0.5) spacing(1.5);
    text-transform: uppercase;

    .inactive {
      background-color: $main-background-color;
    }
  }
}
</style>
