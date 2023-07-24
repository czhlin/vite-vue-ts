export {};
declare global {
	import type { VNode } from 'vue';
	import type { UserConfig } from 'vite';
	import type { installer as ElementPlusInstaller } from 'element-plus';
	export interface ProjectEnv {
		VITE_ENV: string;
		VITE_PORT: number;
		VITE_APP_TITLE: string;
		VITE_APP_API_HOST: string;
		VITE_APP_BASE_API: string;
		VITE_APP_ROUTER_PREFIX: string;
		VITE_APP_UPLOAD_URL: string;
		VITE_APP_SOCKET_API: string;
		VITE_COMPRESSION: ViteCompression;
		VITE_CDN: boolean;
	}
	export type ProjectEnvFn<T = ProjectEnv> = (env: T) => UserConfig;
	/**
	 * 打包压缩格式的类型声明
	 */
	type ViteCompression = 'none' | 'gzip' | 'brotli' | 'both' | 'gzip-clear' | 'brotli-clear' | 'both-clear';
	declare const PROJECT_ENV: ProjectEnv; //暴露出去的环境变量
	/**
	 * 处理全局挂载window
	 */
	interface Window {
		ElementPlus: ElementPlusInstaller;
		ElementPlusIconsVue: any;
	}
	/**
	 *  icon module
	 */
	interface IconModule {
		name: string;
		render: () => VNode;
	}
}
