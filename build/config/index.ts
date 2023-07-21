import { pathResolve } from '../uitls';
export * from './appInfo';
export * from './plugins';
/** 设置别名 */
export const BUILD_ALIAS: Record<string, string> = {
	'@': pathResolve('src'),
};

/** 设置打包根目录 */
export const BUILD_ROOT: string = process.cwd();
