import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'aasa-mime-type',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/.well-known/apple-app-site-association') {
            res.setHeader('Content-Type', 'application/json')
          }
          next()
        })
      },
    },
  ],
  server: {
    host: true,
  },
})
