<template>
  <div>
    <div>
      <img
        alt="search icon"
        src="/img/search.svg"
      >
    </div>
    <input
      v-model="searchQuery"
      class="search-input"
      data-testid="search-input"
      placeholder="Search services"
      type="search"
    >
  </div>
</template>

<script setup lang="ts">
const searchQuery = defineModel<string>()
</script>

<style lang="scss" scoped>
div {
    position: relative;

    >div {
        align-items: center;
        bottom: 0;
        color: $input-placeholder-color;
        display: flex;
        left: 0;
        padding-left: spacing(3);
        pointer-events: none;
        position: absolute;
        top: 0;
    }

    >input {
        border: 1px solid $input-border-color;
        border-radius: $border-radius-sm;
        color: $input-text-color;
        display: block;
        font-size: $font-size-sm;
        padding: spacing(2.5) spacing(4) spacing(2.5) spacing(9);
        transition: border 0.1s ease-in-out;
        width: 100%;

        &:focus {
            border-color: $input-border-focus-color;
            outline: 2px solid transparent;
            outline-offset: 2px;
        }

        &::placeholder {
            color: $input-placeholder-color;
            font-size: $font-size-sm;
        }
    }
}
</style>
