import pkg from '../../package.json';
/** 获取打包信息 */
const { dependencies, devDependencies, name, version } = pkg;

export const __APP_INFO__ = {
	pkg: { dependencies, devDependencies, name, version },
	lastBuildTime: Date.now(),
};
