import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // base: "/jattiman.github.io/", // for github pages I GUESS
  base: "/", // for github pages I GUESS
  plugins: [react()],
})
