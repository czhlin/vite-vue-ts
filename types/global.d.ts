export {};
declare global {
	import type { UserConfig } from 'vite';
	export interface ProjectEnv {
		ENV?: string;
		VITE_PORT?: string;
		VITE_APP_TITLE?: string;
		VITE_APP_API_HOST?: string;
		VITE_APP_BASE_API?: string;
		VITE_APP_ROUTER_PREFIX?: string;
		VITE_APP_UPLOAD_URL?: string;
		VITE_APP_SOCKET_API?: string;
	}
	export type ProjectEnvFn = (env: ProjectEnv) => UserConfig;
}
