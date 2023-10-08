import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts';
import { libInjectCss } from 'vite-plugin-lib-inject-css';
import react from '@vitejs/plugin-react'
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts(), libInjectCss(), svgr(), react()],
  build: {
    copyPublicDir: false,
    lib: {
      entry: './src/index.ts',
      fileName: (format) => `index.${format}.js`,
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime'],
    }
  }
})
