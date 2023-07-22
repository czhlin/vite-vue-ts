import type { App } from 'vue';
import { defineComponent, h } from 'vue';
import IconWarp from '@/components/Icon.tsx';
export default async (app: App) => {
	const hasCDN = import.meta.env.VITE_CDN;
	//使用CDN注册icon
	if (!hasCDN || hasCDN === 'false') {
		return;
	}
	const icons = import.meta.glob<boolean, string, IconModule>('@/assets/icons/*');
	const iconsMapArr = Object.entries(icons).map(async ([path, iconPromise]): Promise<[string, IconModule]> => {
		const startIdx = path.lastIndexOf('/');
		const endIdx = path.lastIndexOf('.');
		let name = path.slice(startIdx + 1, endIdx);
		name = name.charAt(0).toUpperCase() + name.slice(1);
		const iconModule = await iconPromise();
		return [name, iconModule];
	});
	const iconsArr = await Promise.all(iconsMapArr);
	iconsArr.forEach(([name, icon]: [string, IconModule]) => {
		app.component(
			`Ic${name}`,
			defineComponent({
				render: () => h(IconWarp, () => icon.render()),
			})
		);
	});
};
