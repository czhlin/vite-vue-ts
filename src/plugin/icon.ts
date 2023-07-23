import type { Plugin } from 'vue';
import { defineComponent, h } from 'vue';
import IconWarp from '@/components/Icon.tsx';
import { importContextModule } from '@/utils';
const IconPlugin: Plugin = {
	async install(app) {
		if (!PROJECT_ENV.VITE_CDN) {
			//没有开启CDN模式默认使用按需引入
			return;
		}
		const IconModuleFn = () => import.meta.glob<IconModule>('@/assets/icons/*', { eager: true });
		const iconsMap = importContextModule<IconModule>(IconModuleFn, { firstWordUpperCase: true });
		for (const [name, icon] of Object.entries(iconsMap)) {
			app.component(
				`Ic${name}`,
				defineComponent({
					render: () => h(IconWarp, () => icon.render()),
				})
			);
		}
	},
};
export default IconPlugin;
