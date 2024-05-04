<template>
  <nav>
    <div class="container-centered">
      <div class="logo">
        <router-link to="/">
          <img
            alt="Logo"
            src="/img/logo.svg"
          >
        </router-link>
      </div>
      <div class="right">
        <NavButton
          label="organization"
          link="organization"
        >
          <template #icon>
            <img
              alt="logo"
              src="/img/org.svg"
            >
          </template>
        </NavButton>
        <NavButton
          label="settings"
          link="settings"
        >
          <template #icon>
            <img
              alt="logo"
              src="/img/settings.svg"
            >
          </template>
        </NavButton>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import NavButton from './NavButton.vue'

</script>

<style lang="scss" scoped>
nav {
    background: linear-gradient(180deg, #09224F 0%, #073382 100%);

    >div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .right {
        display: flex;
        align-items: center;
        column-gap: 0.25rem;
    }
}
</style>
