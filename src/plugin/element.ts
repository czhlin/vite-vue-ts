import type { Plugin } from 'vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import { h, defineComponent } from 'vue';
import IconWarp from '@/components/Icon.tsx';
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
		Object.entries(window.ElementPlusIconsVue as Record<string, IconModule>).forEach(([name, icon]) => {
			app.component(
				`Ep${name}`,
				defineComponent({
					render: () => h(IconWarp, () => icon.render()),
				})
			);
		});
	},
};
export default ElementPlugin;
