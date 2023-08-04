import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/shared/scss/colors";
          @import "./src/shared/scss/typography";
          @import "./src/shared/scss/elements";
        `,
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
