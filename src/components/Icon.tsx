import type { App } from 'vue';
import type { PathModuleCallBack, ContextModule } from '@/utils/importModule';
import { FunctionalComponent, defineAsyncComponent } from 'vue';
import { importContextModule, isContextPomiseModule, isContextNormalModule } from '@/utils/importModule';
/**
 *
 * @param _ 组件props
 * @param ctx 组件上下文ctx
 * @returns 返回一个IconWarp组件
 */
export const IconWarp: FunctionalComponent = (_, ctx) => <el-icon>{ctx.slots?.default?.()}</el-icon>;
/**
 *
 * @param app App实例
 * @param iconsMap icon模块表
 * @param prefix 注册前缀
 */
export const loadIcons = (app: App, iconsMap: ContextModule<IconModule>, prefix?: string) => {
	for (const [name, icon] of Object.entries(iconsMap)) {
		app.component(`${prefix ?? ''}${name}`, () => <IconWarp>{() => icon.render()}</IconWarp>);
	}
};
/**
 *
 * @param app App实例
 * @param iconsMap 异步icon模块表
 * @param prefix 注册前缀
 */
export const loadAsyncIcons = (app: App, iconsMap: ContextModule<IconModule, () => Promise<IconModule>>, prefix?: string) => {
	for (const [name, icon] of Object.entries(iconsMap)) {
		const AsynIcon = defineAsyncComponent(() => icon().then((item) => item.render()));
		app.component(`${prefix ?? ''}${name}`, () => (
			<IconWarp>
				<AsynIcon />
			</IconWarp>
		));
	}
};
/**
 *
 * @param app App实例
 * @param iconModuleFn icon模块加载函数
 * @param prefix 注册前缀
 */
export const loadContextIcons = (app: App, iconModuleFn: PathModuleCallBack<IconModule>, prefix?: string) => {
	const resultModule = importContextModule<IconModule>(iconModuleFn, { firstWordUpperCase: true });
	if (isContextPomiseModule<IconModule>(resultModule)) {
		loadAsyncIcons(app, resultModule, prefix);
	} else if (isContextNormalModule(resultModule)) {
		loadIcons(app, resultModule, prefix);
	}
};
