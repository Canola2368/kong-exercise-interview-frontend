<template>
  <dl>
    <dt>
      <component :is="statusIcon" />
    </dt>
    <dd>{{ status }}</dd>
  </dl>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { CheckIcon, ProgressIcon, CloseIcon } from '@kong/icons'
import { ServiceStatusEnum } from '../../../types'

const props = defineProps<{
  status: ServiceStatusEnum
}>()

const statusIcon = computed(() => {
  switch (props.status) {
    case ServiceStatusEnum.Published:
      return CheckIcon
    case ServiceStatusEnum.InProgress:
      return ProgressIcon
    case ServiceStatusEnum.Unpublished:
      return CloseIcon
    default:
      return null
  }
})
</script>

<style scoped lang="scss">
dl {
  align-items: end;
  display: inline-flex;
  gap: spacing(2);
}

span:has(svg) {
  height: $icon-size-xs !important;
  width: $icon-size-xs !important;

  &.check-icon {
    color: $success-color !important
  }

  &.progress-icon {
    color: $warning-color !important
  }

  &.close-icon {
    color: $inactive-color !important
  }
}

dd {
  color: $text-color;
  font-size: $font-size-xs;
  margin-top: spacing(1);
  opacity: 0.7;
  text-transform: capitalize;
}
</style>
