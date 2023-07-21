import { createApp } from 'vue';
import App from './App.vue';
import plugin from './plugin';
plugin(createApp(App)).mount('#app');
