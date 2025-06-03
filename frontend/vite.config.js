import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    publicDir: 'public',
    base: '/',
    assetsInclude: ['**/*.jpg', '**/*.png', '**/*.gif', '**/*.svg'],
    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        rollupOptions: {
        // output: {
        //   assetFileNames: 'assets/[name].[ext]'
        // }
        }
    },
    server: {
        port: 3000,
        host: true,
        fs: {
            // Allow serving files from one level up to the project root
            allow: ['..']
        }
    }
});
