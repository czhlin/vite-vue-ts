import autoprefixer from 'autoprefixer';
import { BUILD_ALIAS, BUILD_ROOT, __APP_INFO__, BUILD_EXTENSIONS } from './config';
import { pathResolve } from './uitls';
import getPluginsList from './plugin';
// https://vitejs.dev/config/
const EnvFn: ProjectEnvFn = (env) => {
	return {
		root: BUILD_ROOT, //项目根目录,
		base: '/',
		publicDir: pathResolve('public'),
		assetsInclude: '**/assets/*',
		resolve: {
			alias: BUILD_ALIAS,
			extensions: BUILD_EXTENSIONS, //省略后缀名
		},
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/global.scss" as *;', //加载全局样式使用变量
				},
			},
			modules: {
				// 一般我们可以通过generateScopedName属性来对生成的类名进行自定义
				// 其中，name表示当前文件名，local表示类名
				generateScopedName: '[name]__[local]__[hash:base64:5]',
			},
			// 进行PostCSS配置
			postcss: {
				plugins: [
					autoprefixer({
						// 指定目标浏览器
						overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11'],
					}),
				],
			},
		},
		plugins: getPluginsList(env),
		define: {
			__INTLIFY_PROD_DEVTOOLS__: false,
			__VUE_PROD_DEVTOOLS__: false,
			__APP_INFO__,
			PROJECT_ENV: env,
			'process.env.NODE_ENV': `'${env.VITE_ENV}'`,
		},
	};
};
export default EnvFn;
