/*
 * @Author: kwk
 * @Date: 2024-06-21 15:54:32
 * @LastEditors: mythuscry mythuscry@gmail.com
 * @LastEditTime: 2024-10-06 10:00:03
 * @FilePath: \sc2hub\src\main.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
import { createApp } from "vue";
import App from "./App.vue";
import { tw } from 'twind';
import './index.css';

// 启动 Twind CSS
tw();
createApp(App).mount("#app");
