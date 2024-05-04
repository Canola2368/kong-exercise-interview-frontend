<template>
  <section>
    <dl
      v-for="([key, value], id) in Object.entries(newMetrics)"
      :key="id"
    >
      <ServiceSingleData
        :metric="key"
        :value="value"
      />
      <template v-if="key === 'requests'">
        ·
        <ServiceSingleData
          :metric="'errors'"
          :value="metrics.errors"
        />
      </template>
    </dl>
  </section>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import type { ServiceMetrics } from '../../../types'
import ServiceSingleData from './ServiceSingleData.vue'

const props = defineProps<{
  metrics: ServiceMetrics
}>()

const newMetrics = computed(() => ({
  latency: props.metrics.latency,
  uptime: props.metrics.uptime,
  requests: props.metrics.requests,
}))

</script>

<style lang="scss" scoped>
section {
  display: flex;
  flex-direction: column;
}

dl {
  align-items: center;
  display: inline-flex;
  font-size: $font-size-xs;
  font-weight: $font-weight-semibold;
  gap: 1ch;
}
</style>
