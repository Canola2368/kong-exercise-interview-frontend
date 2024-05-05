<template>
  <header>
    <ServiceStatus :status="service.published" />
    <ServiceBadge
      :id="service.id"
      :versions="service.versions"
    />
  </header>
  <div class="details">
    <h3>{{ service.name }}</h3>
    <p>{{ service.description }}</p>
  </div>
  <footer>
    <ServiceData
      v-if="service.metrics"
      :metrics="service.metrics"
    />
    <ServiceSingleDataUnconfigured v-else />
    <ServiceAvatar :developers="uniqueDevelopers" />
  </footer>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import type { Developer, Service } from 'types'
import ServiceStatus from '../ui/ServiceStatus.vue'
import ServiceBadge from '../ui/ServiceBadge.vue'
import ServiceData from '../ui/ServiceData.vue'
import ServiceSingleDataUnconfigured from '../ui/ServiceSingleDataUnconfigured.vue'
import ServiceAvatar from '../ui/ServiceAvatar.vue'

const props = defineProps<{
  service: Service
}>()

const uniqueDevelopers = computed(() => {
  const uniqueIds = new Set<string>()
  const uniqueDeveloperArray: Developer[] = []

  props.service.versions.forEach(version => {
    if (version.developer) {
      const { id, name, email, avatar } = version.developer
      if (!uniqueIds.has(id)) {
        uniqueIds.add(id)
        uniqueDeveloperArray.push({ id, name, email, avatar })
      }
    }
  })

  return uniqueDeveloperArray
})
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
  align-items: end;
  display: flex;
  justify-content: space-between;
  margin-top: auto;

  >span {
    color: $text-color;
    font-size: $font-size-xs;
    font-weight: $font-weight-semibold;
  }
}

div.details {
  margin-bottom: spacing(9);
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
