import { pathResolve } from '../uitls';
export * from './appInfo';
import getPluginsList from '../plugin';
import optimizeDeps from './optimizeDeps';

/** 设置别名 */
export const BUILD_ALIAS: Record<string, string> = {
	'@': pathResolve('src'),
};

/** 设置打包根目录 */
export const BUILD_ROOT: string = process.cwd();

export { getPluginsList /**导出plugin */, optimizeDeps /** 导出依赖预构建配置 */ };
