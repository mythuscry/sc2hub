/*
 * @Author: kwk
 * @Date: 2024-06-21 15:54:32
 * @LastEditors: mythuscry mythuscry@gmail.com
 * @LastEditTime: 2024-09-28 09:45:11
 * @FilePath: \sc2hub\vite.config.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
// https://vitejs.dev/config/
export default defineConfig(async () => ({
    plugins: [vue()],

    build: {
        sourcemap: true
    },

    // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
    //
    // 1. prevent vite from obscuring rust errors
    clearScreen: false,
    // 2. tauri expects a fixed port, fail if that port is not available
    server: {
        port: 1420,
        strictPort: true,
        watch: {
            // 3. tell vite to ignore watching `src-tauri`
            ignored: ["**/src-tauri/**"],
        },
    },
    css: {
        postcss: {
            plugins: [
                tailwindcss,
                autoprefixer,
            ],
        },
    },

}));
