<template>
  <header>
    <ServiceStatus :status="service.published" />
    <ServiceBadge :length="service.versions.length" />
  </header>
  <div>
    <h3>{{ service.name }}</h3>
    <p>{{ service.description }}</p>
  </div>
</template>

<script setup lang="ts">
import type { Service } from 'types'
import ServiceStatus from '../ui/ServiceStatus.vue'
import ServiceBadge from '../ui/ServiceBadge.vue'

defineProps<{
  service: Service
}>()
</script>

<style scoped lang="scss">
* {
  width: 100%;
}

header {
  align-items: start;
  display: flex;
  justify-content: space-between;
}

div {
  margin-top: spacing(2.5);

  h3 {
    color: $heading-color;
    font-size: $font-size-lg;
    font-weight: $font-weight-semibold;
    line-height: $line-height-base;
  }

  p {
    color: $text-color;
    font-size: $font-size-sm;
    margin-top: spacing(2);
    @include text-ellipsis(2);
  }
}
</style>
