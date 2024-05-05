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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    border: 1px solid $error-color;
    border-radius: $border-radius-base;
    background-color: $error-lightest-background;
    margin-top: spacing(6);
    padding: spacing(6);
    gap: spacing(2);

    figure {
        display: inline-flex;
        align-items: center;
        gap: spacing(2);

        figcaption {
            color: $error-darkest-foreground;
            font-weight: $font-weight-semibold
        }
    }

    kbd {
        padding: spacing(1) spacing(2);
        margin-left: spacing(2);
        border: 1px solid $error-color;
        border-radius: $border-radius-base;
        background-color: $error-light-background;
    }
}
</style>
