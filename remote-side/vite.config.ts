import { defineConfig } from "vite";
import angular from "@analogjs/vite-plugin-angular";
import { federation } from "@module-federation/vite";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: "chrome89",
  },
  resolve: {
    mainFields: ["module"],
  },
  plugins: [
    federation({
      name: "remote-app",
      filename: "remoteEntry.js",
      exposes: {
        "./Button": "./src/components/counter/counter-button.component.ts"
      },
      shared: ['@angular/core']
    }),
    angular(),
  ],
}));
