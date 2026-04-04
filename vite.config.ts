import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from "nitro/vite";
// import deno from "@deno/vite-plugin"

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true
  },
  resolve: {
    tsconfigPaths: true
  },
  plugins: [
    tailwindcss(),
    nitro({
      preset: "node-server"
    }),
    tanstackStart({
      prerender: {
        enabled: true
      }
    }),
    // deno(),
    // cloudflare({ viteEnvironment: { name: 'ssr' } }),
    viteReact(),
  ],
})
console.log("HELLOOO")