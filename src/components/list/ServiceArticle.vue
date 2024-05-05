<template>
  <header>
    <ServiceStatus :status="service.published" />
    <ServiceBadge
      :id="service.id"
      :length="service.versions.length"
    />
  </header>
  <div>
    <h3>{{ service.name }}</h3>
    <p>{{ service.description }}</p>
  </div>
  <footer>
    <ServiceData
      v-if="service.metrics"
      :metrics="service.metrics"
    />
    <ServiceSingleDataUnconfigured v-else />
  </footer>
</template>

<script setup lang="ts">
import type { Service } from 'types'
import ServiceStatus from '../ui/ServiceStatus.vue'
import ServiceBadge from '../ui/ServiceBadge.vue'
import ServiceData from '../ui/ServiceData.vue'
import ServiceSingleDataUnconfigured from '../ui/ServiceSingleDataUnconfigured.vue'

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

footer {
  margin-top: auto;

  >span {
    color: $text-color;
    font-size: $font-size-xs;
    font-weight: $font-weight-semibold;
  }
}

div {
  margin-bottom: spacing(4);
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
