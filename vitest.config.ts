import { fileURLToPath } from 'node:url'
import { mergeConfig, defineConfig } from 'vitest/config'
import viteConfig from './vite.config'

export default defineConfig(configEnv => mergeConfig(
  viteConfig(configEnv),
  defineConfig({
    test: {
      globals: true,
      environment: 'jsdom',
      include: ['**/*.spec.ts'],
      exclude: [
        './dist/**',
        'node_modules',
      ],
      setupFiles: ['./vitest.setup.ts'],
      root: fileURLToPath(new URL('./', import.meta.url)),
      deps: {
        optimizer: {
          web: {
            // https://github.com/vitest-dev/vitest/issues/4074
            exclude: ['vue'],
          },
        },
      },
    },
  }),
))
