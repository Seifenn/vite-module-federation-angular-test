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
      name: "host-app",
      remotes: {
        remote_app: "http://localhost:5175/remoteEntry.js",
      },
    }),
    angular(),
  ],
}));
