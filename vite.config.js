import { resolve } from 'path';
import { defineConfig } from 'vite';


export default defineConfig({
     build: {
          rollupOptions: {
               input: {
                    main: resolve(__dirname, 'index.html'),
                    agent: resolve(__dirname, 'agent.html'),
                    questions: resolve(__dirname, 'home_info.html')
               }
          }
     },
     server: {
          host: true
     }
});