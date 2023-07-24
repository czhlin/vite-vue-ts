import type { Plugin } from 'vue';
import { loadContextIcons } from '@/components/Icon';
const IconPlugin: Plugin = {
	async install(app) {
		if (!PROJECT_ENV.VITE_CDN) {
			//没有开启CDN模式默认使用按需引入
			return;
		}
		//注册全局icon组件
		// loadIcons(app, window.ElementPlusIconsVue as Record<string, IconModule>, 'Ep'); //加载elementPlus的Icon
		loadContextIcons(app, () => import.meta.glob<IconModule>('@/assets/icons/*'), 'Ic'); //加载本地@/assets/icons中的Icon
	},
};
export default IconPlugin;
