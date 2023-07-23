import type { Plugin } from 'vue';
import { loadContextIcons } from '@/components/Icon.tsx';
const IconPlugin: Plugin = {
	async install(app) {
		if (!PROJECT_ENV.VITE_CDN) {
			//没有开启CDN模式默认使用按需引入
			return;
		}
		loadContextIcons(app, () => import.meta.glob('@/assets/icons/*', { eager: true }), 'Ic');
	},
};
export default IconPlugin;
