import { resolve } from 'path';
/**
 * 类型定义
 */

export type MergeConf = (envFnArr: Array<ProjectEnvFn>) => ProjectEnvFn<Record<string, string>>;

export type PathResolve = (dir: string) => string;

export type WarpProjectEnv = (env: Record<string, string>) => ProjectEnv;
/**
 * 具体实现
 */

export const mergeConf: MergeConf = (envFnArr) => {
	return (env) => {
		const projectEnv = warpProjectEnv(env);
		return envFnArr.reduce((preEnv, curEnvFn) => ({ ...preEnv, ...curEnvFn(projectEnv) }), {});
	};
};

export const pathResolve: PathResolve = (dir) => {
	return resolve(process.cwd(), dir);
};

export const warpProjectEnv: WarpProjectEnv = (env) => {
	const projectEnv: ProjectEnv = {
		ENV: '',
		VITE_PORT: 8848,
		VITE_APP_TITLE: '',
		VITE_APP_API_HOST: '',
		VITE_APP_BASE_API: '',
		VITE_APP_ROUTER_PREFIX: '',
		VITE_APP_UPLOAD_URL: '',
		VITE_APP_SOCKET_API: '',
		VITE_COMPRESSION: 'none',
		VITE_CDN: false,
	};
	for (const [key, value] of Object.entries(env)) {
		if (!(key in projectEnv)) {
			continue;
		}
		const realName = value.replace(/\\n/g, '\n');
		const defaultValue = projectEnv[key];
		const valueType = typeof projectEnv[key];
		switch (valueType) {
			case 'boolean':
				projectEnv[key] = !!(realName && realName !== 'false');
				break;
			case 'number': {
				const numberRealName = Number(realName);
				projectEnv[key] = numberRealName ? numberRealName : defaultValue;
				break;
			}
			default:
				projectEnv[key] = realName ? realName : defaultValue;
		}
		projectEnv[key] = value;
	}
	return projectEnv;
};
