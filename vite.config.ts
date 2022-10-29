import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import * as path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [svelte()],
  resolve: {
    alias: {
      "@utils": path.resolve("./src/utils"),
    },
  },
});
