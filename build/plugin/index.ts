/* eslint-disable no-mixed-spaces-and-tabs */
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import ElementPlus from 'unplugin-element-plus/vite';
import Components from 'unplugin-vue-components/vite'; //按需导入配置模块
import AutoImport from 'unplugin-auto-import/vite'; // 自动导入配置的模块
import Icons from 'unplugin-icons/vite';
import svgLoader from 'vite-svg-loader';
import IconsResolver from 'unplugin-icons/resolver';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import eslintPlugin from 'vite-plugin-eslint';
import viteImagemin from 'vite-plugin-imagemin';
import { visualizer } from 'rollup-plugin-visualizer'; //打包分析
import configCompressPlugin from './compress';
import previewStaticGzipPlugin from './previewStaticGzip';
import htmlPlugin from './htmlPlugin';
import { setPreLoadFile } from './preload';
const lifecycle = process.env.npm_lifecycle_event;
export default (env: ProjectEnv) => [
	vue(),
	//jsx、tsx语法支持
	vueJsx(),
	//集成elementPlus组件库
	ElementPlus({
		useSource: true,
	}),
	//自动导入组件
	AutoImport({
		imports: ['vue'],
		// targets to transform
		include: [
			/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
			/\.vue$/,
			/\.vue\?vue/, // .vue
			// /\.md$/, // .md
		],
		resolvers: [
			ElementPlusResolver({
				importStyle: 'sass',
			}),
		],
		dts: 'types/auto-generate/auto-import.d.ts',
		// Inject the imports at the end of other imports
		injectAtEnd: true,
		eslintrc: {
			enabled: true, // <-- this
			filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
			globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
		},
	}),
	//按需导入组件
	Components({
		include: [
			/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
			/\.vue$/,
			/\.vue\?vue/, // .vue
		],
		// 指定组件位置，默认是src/components
		dirs: ['src/components'],
		// extensions: ['vue'],
		// 配置文件生成位置
		dts: 'types/auto-generate/components.d.ts',
		// ui库解析器
		resolvers: [
			// Auto register icon components
			// 自动注册图标组件
			IconsResolver({
				prefix: false,
				enabledCollections: ['ep'],
				customCollections: ['ic'],
			}),
			ElementPlusResolver({
				importStyle: 'sass',
			}),
		],
	}),
	//关联eslint
	eslintPlugin({
		include: ['src/**/*.ts', 'src/**/*.vue', 'src/*.ts', 'src/*.vue'],
	}),
	// 配置Icon
	Icons({
		autoInstall: true,
		customCollections: {
			ic: FileSystemIconLoader('src/assets/icons'),
		},
	}),
	// svg组件化支持
	svgLoader(),
	//图片压缩
	viteImagemin({
		gifsicle: {
			optimizationLevel: 7,
			interlaced: false,
		},
		optipng: {
			optimizationLevel: 7,
		},
		mozjpeg: {
			quality: 90,
		},
		pngquant: {
			quality: [0.8, 0.9],
			speed: 4,
		},
		svgo: {
			plugins: [
				{
					name: 'removeViewBox',
				},
				{
					name: 'removeEmptyAttrs',
					active: false,
				},
			],
		},
	}),
	//文件压缩
	configCompressPlugin(env.VITE_COMPRESSION),
	//本地preview压缩后的打包文件插件
	previewStaticGzipPlugin(),
	//开启cdn加速
	htmlPlugin(env.VITE_CDN),
	// pnpm report 进行打包分析
	lifecycle === 'report' ? visualizer({ open: true, brotliSize: true, filename: 'report.html' }) : null,
	//预加载
	env.VITE_ENV === 'development' &&
		setPreLoadFile({
			pathList: [
				// 需要提前加载的资源目录
				'./src/views/',
				'./src/components/',
			],
			preFix: '', // 项目根路径
		}),
];
