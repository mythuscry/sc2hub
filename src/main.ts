import { createApp } from "vue";
import App from "./App.vue";
import { twindSetup } from 'twind';
import { tw } from 'twind';
import './index.css';

// 启动 Twind CSS
tw();
createApp(App).mount("#app");
