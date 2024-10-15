/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import { federation } from '@module-federation/vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  build: {
    target: ['es2022'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      ssr: false,
      static: false,
      prerender: {
        routes: [],
      },
    }),
    federation({
      name: 'host-app',
      remotes: {
        remote_app: {
          type: 'module',
          name: 'remote_app',
          entry: 'http://localhost:5174/remoteEntry.js',
          entryGlobalName: 'remote_app',
          shareScope: 'default',
        },
      },
      filename: 'remoteEntry.js',
      shared: ['@angular/core'],
    }),
  ],
}));
