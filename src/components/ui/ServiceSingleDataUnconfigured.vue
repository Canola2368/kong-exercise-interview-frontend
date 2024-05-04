<template>
  <section>
    <div />
    <span>Not configured with runtime yet</span>
  </section>
</template>

<style lang="scss" scoped>
section {
  align-items: center;
  display: inline-flex;
  gap: spacing(2);

  div {
    background-color: $disabled-color;
    border-radius: $border-radius-round;
    height: $icon-size-mini;
    width: $icon-size-mini;
  }

  span {
    color: $text-color;
    font-size: $font-size-xs;
    font-weight: $font-weight-semibold;
  }
}
</style>
