import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path' /*Validacion de multiples paginas*/

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      input: {
        master: resolve(__dirname, './index.html'),
        skills: resolve(__dirname, './skills.html'),
        projects: resolve(__dirname, './projects.html')
      }
    }
  }
})