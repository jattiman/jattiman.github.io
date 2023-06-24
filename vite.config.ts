import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
  const config = {
    base: "/", // for github pages I GUESS
    plugins: [react()],
  }
  if (command !== 'serve') {
    config.base = '/';
  }
  return config;

})
