import { pathResolve } from './uitls';
import { EXTERNAL_ARRAY, VENDOR_NAME } from './config';
const EnvFn: ProjectEnvFn = (env) => ({
	build: {
		sourcemap: false,
		// 消除打包大小超过500kb警告
		chunkSizeWarningLimit: 4000,
		assetsInlineLimit: 4 * 1024,
		rollupOptions: {
			input: {
				index: pathResolve('index.html'),
			},
			external: env.VITE_CDN ? EXTERNAL_ARRAY : [],
			// 静态资源分类打包
			output: {
				chunkFileNames: 'static/js/[name]-[hash].js',
				entryFileNames: 'static/js/[name]-[hash].js',
				assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
				manualChunks(id) {
					// 将 node_modules 中的代码单独打包成一个 JS 文件
					if (id.includes('node_modules')) {
						const key = VENDOR_NAME.find((key) => id.includes(key)) ?? 'common';
						const name = `vendor-${key}`;
						return name;
					}
				},
			},
		},
	},
});
export default EnvFn;
