/*
 * @Author: kwk
 * @Date: 2024-10-06 09:35:38
 * @LastEditors: mythuscry mythuscry@gmail.com
 * @LastEditTime: 2024-10-06 09:35:49
 * @FilePath: \sc2hub\src\shims-vue.d.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by ${git_name_email}, All Rights Reserved. 
 */
declare module '*.vue' {
    import { DefineComponent } from 'vue';
    const component: DefineComponent<{}, {}, any>;
    export default component;
  }
  
declare module '*.png'