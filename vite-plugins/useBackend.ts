/**
 * This plugin defines `import.meta.env.BACKEND_URL` conditionally
 */

import { loadEnv } from 'vite'
import type { PluginOption } from 'vite'
export default function useBackend(
  backendUrl: string | ((env: NodeJS.ProcessEnv) => string)
): PluginOption {
  return {
    name: 'vite-plugin-use-backend',
    enforce: 'post',
    config(_, { mode }) {
      const url =
        typeof backendUrl === 'string' ? backendUrl : backendUrl({
          ...process.env,
          ...loadEnv(mode, process.cwd(), ''),
        })
      return {
        define: {
          'import.meta.env.BACKEND_URL': JSON.stringify(url),
        },
      }
    },
  }
}
