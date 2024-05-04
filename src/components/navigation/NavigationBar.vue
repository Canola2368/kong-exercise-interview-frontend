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
          link="/"
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
          link="/"
        >
          <template #icon>
            <img
              alt="logo"
              src="/img/settings.svg"
            >
          </template>
        </NavButton>
        <AccountButton
          link="/"
          name="katherine ellis"
        />
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
          link="/"
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
          link="/"
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
        <AccountButton
          link="/"
          name="katherine ellis"
        />
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
  background: linear-gradient(180deg, $navigation-darkest-background 0%, $navigation-dark-background 100%);
  bottom: auto;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 10;

  @include breakpoint('lg') {
    position: relative;
  }

  >section {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .logo {
    flex-shrink: 0;
  }
}

ul {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  padding: spacing(4);
  row-gap: spacing(2);

  li {
    list-style-type: none;
    padding: spacing(0);
  }
}
</style>
