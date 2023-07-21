import * as Vue from 'vue';
//自定义全局变量
declare module '@vue/runtime-core' {
	import type { ElConfigProvider } from 'element-plus';
	export interface ComponentCustomProperties {
		$ELEMENT: ElConfigProvider;
	}
}
