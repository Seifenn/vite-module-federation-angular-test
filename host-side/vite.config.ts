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
      name: "host-app",
      remotes: {
        remote_app: {
          type: "module",
          name: "remote_app",
          entry: "http://localhost:5174/remoteEntry.js",
          entryGlobalName: "remote_app",
          shareScope: "default",
        },
      },
      filename: "remoteEntry.js",
      shared: ['@angular/core']
    }),
    angular(),
  ],
}));
