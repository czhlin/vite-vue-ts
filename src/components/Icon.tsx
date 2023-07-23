import type { App } from 'vue';
import type { PathModuleCallBack } from '@/utils';
import { FunctionalComponent } from 'vue';
import { importContextModule } from '@/utils';
export const IconWarp: FunctionalComponent = (_, ctx) => <el-icon>{ctx.slots?.default?.()}</el-icon>;

export const loadIcons = (app: App, iconsMap: Record<string, IconModule>, prefix?: string) => {
	for (const [name, icon] of Object.entries(iconsMap)) {
		app.component(`${prefix ?? ''}${name}`, () => <IconWarp>{() => icon.render()}</IconWarp>);
	}
};
export const loadContextIcons = (app: App, iconModuleFn: PathModuleCallBack<IconModule>, prefix?: string) => {
	loadIcons(app, importContextModule<IconModule>(iconModuleFn, { firstWordUpperCase: true }), prefix);
};
