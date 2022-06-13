import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
// @ts-ignore

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 3000,
        host: true,
    },
    plugins: [react({})],
    build: {
        sourcemap: false,
    },
})
