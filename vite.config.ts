import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tsConfigPaths from 'vite-tsconfig-paths'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { cloudflare } from '@cloudflare/vite-plugin'
import deno from "npm:@deno/vite-plugin"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    deno(),
    tsConfigPaths(),
    tanstackStart(),
    cloudflare({ viteEnvironment: { name: 'ssr' } }),
    // react's vite plugin must come after start's vite plugin
    viteReact(),
    tailwindcss(),
  ],
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  // },
  // resolve: {
  //   alias: {
  //     '@': resolve(__dirname, './src'),
  //   },
  // },
})
