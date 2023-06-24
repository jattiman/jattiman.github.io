import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({command}) => {
  const config = {
    plugins: [react()],
    base: "/", // for github pages I GUESS
    // base: "/jattiman.github.io/", // for github pages I GUESS
  }
  if (command !== 'serve') {
    config.base = '/';
  }
  return config;

})
