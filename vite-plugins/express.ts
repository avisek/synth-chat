/**
 * Run Express inside Vite's development & preview server
 */

import { createServer } from 'vite'
import type { Connect, PluginOption, ViteDevServer } from 'vite'

export default function express(path: string): PluginOption {
  let mode = 'production'
  
  return {
    name: 'vite-plugin-express',
    apply: 'serve',
    
    configResolved(config) {
      mode = config.mode
    },
    
    configureServer: async (server) => {
      server.middlewares.use(expressMiddleware(server, path))
    },
    
    configurePreviewServer: async (server) => {
      const devServer = await createServer({
        server: { middlewareMode: true },
        appType: 'custom',
        mode: mode,
      })
      server.middlewares.use(expressMiddleware(devServer, path))
    },
  }
}

function expressMiddleware(
  server: ViteDevServer,
  path: string,
): Connect.NextHandleFunction {
  return async function expressMiddleware(req, res, next) {
    process.env['VITE'] = 'true'
    try {
      const { app } = await server.ssrLoadModule(path)
      app(req, res, next)
    } catch (err) {
      console.error(err)
    }
  }
}
