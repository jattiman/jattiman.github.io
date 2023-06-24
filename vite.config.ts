import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/jattiman.github.io/", // for github pages
  plugins: [react()],
})
