import { defineConfig } from "vite";
import angular from "@analogjs/vite-plugin-angular";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ["es2020"],
  },
  resolve: {
    mainFields: ["module"],
  },
  plugins: [
    federation({
      name: "remote-app",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./Button": "./src/components/counter/counter-button.component.ts",
      },
    }),
    angular(),
  ],
}));
