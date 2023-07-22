import type { App } from 'vue';
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
import { h, defineComponent } from 'vue';
import IconWarp from '@/components/Icon.tsx';
export default async (app: App) => {
	// 设置全局统一属性
	app.config.globalProperties.$ELEMENT = {
		size: 'large',
		zIndex: 3000,
		locale: zhCn,
	};
	const hasCDN = import.meta.env.VITE_CDN;
	if (!hasCDN || hasCDN === 'false') {
		return;
	}
	//使用CDN时
	app.use(window.ElementPlus);
	//注册全局icon组件
	Object.entries(window.ElementPlusIconsVue).forEach(([name, icon]) => {
		const IconCp = (icon as IconModule).render();
		app.component(
			`Ep${name}`,
			defineComponent({
				render: () => h(IconWarp, () => IconCp),
			})
		);
	});
};
