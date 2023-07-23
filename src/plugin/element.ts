import type { Plugin } from 'vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import { loadIcons } from '@/components/Icon.tsx';
const ElementPlugin: Plugin = {
	install(app) {
		// 设置全局统一属性
		app.config.globalProperties.$ELEMENT = {
			size: 'large',
			zIndex: 3000,
			locale: zhCn,
		};
		if (!PROJECT_ENV.VITE_CDN) {
			//没有开启CDN
			return;
		}
		//使用CDN时
		app.use(window.ElementPlus);
		//注册全局icon组件
		loadIcons(app, window.ElementPlusIconsVue as Record<string, IconModule>, 'Ep');
	},
};
export default ElementPlugin;
