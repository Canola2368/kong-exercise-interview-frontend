<template>
  <div>
    <figure>
      <DangerIcon :size="'32px'" />
      <figcaption>An error has occured : <kbd>{{ error }}</kbd></figcaption>
    </figure>
  </div>
</template>

<script setup lang="ts">
import { DangerIcon } from '@kong/icons'

defineProps<{ error: string }>()
</script>

<style lang="scss" scoped>
span:has(svg) {
    &.danger-icon {
        color: $error-color !important
    }
}

div {
    align-items: center;
    background-color: $error-lightest-background;
    border: 1px solid $error-color;
    border-radius: $border-radius-base;
    display: flex;
    flex-direction: column;
    gap: spacing(2);
    justify-content: center;
    margin-top: spacing(6);
    padding: spacing(6);
    width: 100%;

    figure {
        align-items: center;
        display: inline-flex;
        gap: spacing(2);

        figcaption {
            color: $error-darkest-foreground;
            font-weight: $font-weight-semibold
        }
    }

    kbd {
        background-color: $error-light-background;
        border: 1px solid $error-color;
        border-radius: $border-radius-base;
        margin-left: spacing(2);
        padding: spacing(1) spacing(2);
    }
}
</style>
