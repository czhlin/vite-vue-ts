import type { App } from 'vue';
// import * as Elicons from "@element-plus/icons-vue"
import zhCn from 'element-plus/dist/locale/zh-cn.mjs';
export default (app: App) => {
	// 设置全局统一属性
	app.config.globalProperties.$ELEMENT = {
		size: 'large',
		zIndex: 3000,
		locale: zhCn,
	};
	//注册全局icon组件
	// Object.entries(Elicons).forEach(([name,icon])=>{
	//     app.component(`ElIcon${name}`,icon)
	// })
};
