import type { Plugin } from 'vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
const ElementPlugin: Plugin = {
	install(app) {
		// 设置全局统一属性
		app.config.globalProperties.$ELEMENT = {
			size: 'large',
			zIndex: 3000,
			locale: zhCn,
		};
		if (PROJECT_ENV.VITE_CDN) {
			//使用CDN时
			// app.use(window.ElementPlus);
		}
	},
};
export default ElementPlugin;
