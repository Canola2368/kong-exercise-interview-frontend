<template>
  <span v-if="metric !== 'errors'" />
  <dt>
    {{ metric === "latency" || metric === "requests" ? metricFormatter.format(value) : metricFormatter.format(value *
      100) }}{{ unit }}
  </dt>
  <dd>
    {{ metric }}
  </dd>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'

const metricFormatter = new Intl.NumberFormat('en-US', {
  notation: 'compact',
  compactDisplay: 'short',
})

const props = defineProps<{
  metric: string;
  value: number;
}>()

const unit = computed(() => {
  switch (props.metric) {
    case 'latency':
      return 'ms'
    case 'uptime':
      return '%'
    case 'errors':
      return '%'
    default:
      return null
  }
})
</script>

<style lang="scss" scoped>
span {
  background-color: $success-color;
  border-radius: $border-radius-round;
  height: $icon-size-mini;
  width: $icon-size-mini;
}

dt {
  color: $heading-color;
}

dd {
  color: $text-color
}
</style>
