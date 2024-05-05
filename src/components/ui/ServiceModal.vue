<template>
  <Transition name="modal">
    <section
      v-if="show"
      class="mask"
      @click.self="$emit('close')"
    >
      <div class="container">
        <header>
          Versions ({{ versions.length }})
        </header>
        <div class="body">
          <ul>
            <li
              v-for="version in versions"
              :key="version.id"
            >
              <span>v{{ version.name }}</span>
              <p>{{ version.description }}</p>
              <ServiceModalProtocol :type="version.type" />
              <figure>
                <img
                  v-if="version.developer"
                  :alt="version.developer?.name"
                  :src="version.developer?.avatar"
                >
                <figcaption>
                  <span
                    v-if="version.developer"
                    class="name"
                  >{{ version.developer?.name }}</span>
                  <span class="date">{{ new Intl.DateTimeFormat("en-US").format(new Date(version.updated_at)) }}</span>
                </figcaption>
              </figure>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </Transition>
</template>

<script setup lang="ts">
import type { ServiceVersion } from 'types'
import ServiceModalProtocol from './ServiceModalProtocol.vue'

defineProps<{
  show: boolean
  versions: ServiceVersion[]
}>()

defineEmits(['close'])
</script>

<style lang="scss" scoped>
.mask {
  background-color: $modal-overlay-background-color;
  display: flex;
  height: 100%;
  left: spacing(0);
  padding: spacing(0) spacing(6);
  position: fixed;
  top: spacing(0);
  transition: opacity 0.3s ease-in-out;
  width: 100%;
  z-index: 99;

  @include breakpoint('lg') {
    padding: spacing(0);
  }

  .container {
    background-color: $white-background-color;
    border-radius: $border-radius-sm;
    box-shadow: $modal-container-box-shadow;
    margin: auto;
    max-width: convert-to-rem(830);
    overflow-y: auto;
    padding: spacing(8);
    transition: all 0.3s ease-in-out;

    header {
      color: $modal-header-heading-color;
      font-size: $font-size-lg;
      font-weight: $font-weight-semibold;
    }

    .body {
      ul {
        list-style: none;
        margin-top: spacing(8);
        padding: spacing(0);
      }

      li {
        display: flex;
        flex-direction: column;
        gap: spacing(6);
        padding: spacing(4) spacing(0);
        width: 100%;

        @include breakpoint('lg') {
          flex-direction: row;
          padding: spacing(2) spacing(0);
        }

        span {
          color: $modal-body-version-color;
          font-size: $font-size-sm;
          font-weight: $font-weight-semibold;
          width: fit-content;

          @include breakpoint('lg') {
            flex-basis: 10%;
            flex-shrink: 0;
          }
        }

        p {
          color: $modal-body-text-color;
          font-size: $font-size-xs;
          @include text-ellipsis(2);

          @include breakpoint('lg') {
            flex-basis: 50%;
          }
        }

        figure {
          display: flex;
          gap: spacing(1.5);
          margin-left: 0;

          @include breakpoint('lg') {
            margin-left: auto;
          }

          img {
            border-radius: $border-radius-round;
            height: $icon-size-xs;
            width: $icon-size-xs;
          }

          figcaption {
            text-align: right;

            span {
              display: block;

              &.name {
                color: $heading-color;
                font-size: $font-size-xs;
                @include text-ellipsis(1);
              }

              &.date {
                color: $modal-body-text-color;
                font-size: $font-size-xs;
                font-weight: $font-weight-regular;
                width: 100%;
              }
            }
          }
        }

        &:not(:last-child) {
          border-bottom: 1px solid $modal-separator-color;
        }
      }
    }
  }

}

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}
</style>
