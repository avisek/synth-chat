import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import express from './vite-plugins/express'
import useBackend from './vite-plugins/useBackend'
import githubPages from './vite-plugins/githubPages'
import add404Html from './vite-plugins/add404Html'

const developmentPort = 3000
const previewPort = 4000

const rootDir = dirname(fileURLToPath(import.meta.url))
const srcDir = resolve(rootDir, './src')
const distDir = resolve(rootDir, './dist')
const clientDir = resolve(srcDir, './client')
const serverDir = resolve(srcDir, './server')
const publicDir = resolve(clientDir, './public')
const clientDistDir = resolve(distDir, './client')
const serverDistDir = resolve(distDir, './server')

// https://vitejs.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  root: clientDir,
  publicDir: publicDir,
  envDir: rootDir,
  envPrefix: 'PUBLIC_',
  server: {
    host: true,
    port: developmentPort,
    strictPort: true,
  },
  preview: {
    port: previewPort,
    strictPort: true,
  },
  build: {
    outDir: isSsrBuild ? serverDistDir : clientDistDir,
    emptyOutDir: true,
    rollupOptions: {
      ...(isSsrBuild && { input: serverDir }),
    },
  },
  plugins: [
    react(),
    express(serverDir),
    useBackend((env) => {
      return env.GITHUB_ACTIONS === 'true' ? env.OFFICIAL_BACKEND_URL : '/'
    }),
    githubPages(),
    add404Html(),
  ],
}))
