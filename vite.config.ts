import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { tanstackStart } from '@tanstack/react-start/plugin/vite'
import { nitro } from "nitro/vite";
// import deno from "@deno/vite-plugin"
import { cloudflare } from "@cloudflare/vite-plugin";


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true,
  },
  resolve: {
    tsconfigPaths: true
  },
  plugins: [
    tailwindcss(),
    nitro({
      preset: "cloudflare-module",
      cloudflare: {
        deployConfig: true,
      },
    }),
    // cloudflare({ viteEnvironment: { name: 'ssr' } }),
    tanstackStart({
      prerender: {
        enabled: true,
      },
    }),
    // deno(),
    viteReact(),
  ] 
})