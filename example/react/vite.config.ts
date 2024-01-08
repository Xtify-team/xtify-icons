import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";
import {vitePluginsXtifyIcons} from 'vite-plugin-xtify-icons';

export default defineConfig({
  base: "./",
  plugins: [
    vitePluginsXtifyIcons({}),
    react()
  ]
});
