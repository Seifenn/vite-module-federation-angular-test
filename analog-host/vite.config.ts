/// <reference types="vitest" />

import { defineConfig } from 'vite';
import analog from '@analogjs/platform';
import { federation } from '@gioboa/vite-module-federation';
import { esBuildAdapter } from '@softarc/native-federation-esbuild';

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => ({
  build: {
    target: ['es2022'],
  },
  resolve: {
    mainFields: ['module'],
  },
  plugins: [
    analog({
      ssr: true,
      static: false,
      prerender: {
        routes: [],
      },
    }),
    federation({
      options: {
        workspaceRoot: __dirname,
        outputPath: 'dist/analog/',
        tsConfig: 'tsconfig.app.json',
        federationConfig: './federation.config.cjs',
        verbose: true,
        dev: command === 'serve', 
      },
      adapter: esBuildAdapter,
    }),
  ],
}));
