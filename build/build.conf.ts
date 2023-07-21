import { pathResolve } from './uitls';
const EnvFn: ProjectEnvFn = (env) => ({
	build: {
		sourcemap: false,
		// 消除打包大小超过500kb警告
		chunkSizeWarningLimit: 4000,
		rollupOptions: {
			input: {
				index: pathResolve('index.html'),
			},
			// 静态资源分类打包
			output: {
				chunkFileNames: 'static/js/[name]-[hash].js',
				entryFileNames: 'static/js/[name]-[hash].js',
				assetFileNames: 'static/[ext]/[name]-[hash].[ext]',
				manualChunks(id) {
					// 将 node_modules 中的代码单独打包成一个 JS 文件
					if (id.includes('node_modules')) {
						return 'vendor';
					}
				},
			},
		},
	},
});
export default EnvFn;
