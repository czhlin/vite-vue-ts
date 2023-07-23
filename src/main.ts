import { createApp } from 'vue';
import App from '@/App.vue';
import router from '@/router';
import appPlugin from '@/plugin';
createApp(App).use(appPlugin).use(router).mount('#app');
