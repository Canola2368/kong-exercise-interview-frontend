<template>
  <nav>
    <section class="container-centered">
      <div class="logo">
        <router-link to="/">
          <img
            alt="Logo"
            src="/img/logo.svg"
          >
        </router-link>
      </div>
      <div class="mobile-hidden">
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
        <AccountButton name="katherine ellis" />
      </div>
      <div class="desktop-hidden">
        <ToggleNavigationButton
          :is-open="isPanelOpen"
          @is-open-change="isPanelOpen = !isPanelOpen"
        />
      </div>
    </section>
    <ul
      v-if="isPanelOpen"
      class="desktop-hidden"
    >
      <li>
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
      </li>
      <li>
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
      </li>
      <li>
        <AccountButton name="katherine ellis" />
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import NavButton from './NavButton.vue'
import AccountButton from './AccountButton.vue'
import ToggleNavigationButton from './ToggleNavigationButton.vue'

const isPanelOpen = ref(false)
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  z-index: 10;
  inset: 0;
  bottom: auto;

  background: linear-gradient(180deg, #09224F 0%, #073382 100%);

  @include media-lg {
    position: relative;
  }

  >section {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo {
    flex-shrink: 0;
  }
}

ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 0.5rem;
  padding: 1rem;

  li {
    padding: 0;
    list-style-type: none;
  }
}
</style>
