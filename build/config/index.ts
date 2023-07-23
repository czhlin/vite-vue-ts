import { pathResolve } from '../uitls';

/**导出打包版本信息 */
export { __APP_INFO__ } from './appInfo';

/** 导出依赖预构建配置 */
export { default as optimizeDeps } from './optimizeDeps';

/** 设置别名 */
export const BUILD_ALIAS: Record<string, string> = {
	'@': pathResolve('src'),
};

/**省略后缀名 */
export const BUILD_EXTENSIONS = ['.js', '.jsx', '.ts', '.tsx', '.json', '.css', '.scss'];

/** 设置打包根目录 */
export const BUILD_ROOT: string = process.cwd();
