import vue from '@vitejs/plugin-vue';
import ElementPlus from 'unplugin-element-plus/vite';
import Components from 'unplugin-vue-components/vite';
import Icons from 'unplugin-icons/vite';
import IconsResolver from 'unplugin-icons/resolver';
import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import eslintPlugin from 'vite-plugin-eslint';
export const getPluginsList = (env: ProjectEnv) => [
	vue(),
	ElementPlus({
		useSource: true,
	}),
	Components({
		// 指定组件位置，默认是src/components
		dirs: ['src/components'],
		extensions: ['vue'],
		// 配置文件生成位置
		dts: 'types/components.d.ts',
		// ui库解析器
		resolvers: [
			// Auto register icon components
			// 自动注册图标组件
			IconsResolver({
				prefix: false,
				enabledCollections: ['ep'],
				customCollections: ['ic'],
			}),
			ElementPlusResolver(),
		],
	}),
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
];
