<template>
  <button @click="$emit('isOpenChange')">
    <span v-if="isOpen"><CloseIcon /></span>
    <span v-else><MenuIcon /></span>
  </button>
</template>

<script lang="ts" setup>
import { MenuIcon, CloseIcon } from '@kong/icons'

defineEmits(['isOpenChange'])
defineProps<{
  isOpen: boolean
}>()
</script>

<style lang="scss" scoped>
button {
    appearance: none;
    background-color: #051d47;
    border: 1px solid #072863;
    border-radius: 4px;
    margin: 0.75rem 0;
    color: white;
    padding: 0.5rem;
}
</style>
