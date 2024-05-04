import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      vue(),
      VueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use './src/assets/scss/variables' as *;  
            @use './src/assets/scss/mixins' as *;  
            @use '@kong/design-tokens/tokens/scss/variables' as *;  
          `,
        },
      },
    },
    server: {
      open: true,
      proxy: {
        '/api': env.VITE_APP_API_URL,
      },
    },
  }
})
