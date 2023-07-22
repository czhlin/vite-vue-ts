import { optimizeDeps } from './config';
const EnvFn: ProjectEnvFn = (env) => ({
	//依赖优化
	optimizeDeps,
	// vite 相关配置
	server: {
		// 是否开启 https
		https: false,
		// 端口号
		port: env.VITE_PORT,
		host: true,
		open: true,
		// 本地跨域代理 https://cn.vitejs.dev/config/server-options.html#server-proxy
		proxy: {
			'/api': {
				target: env.VITE_APP_API_HOST,
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
	preview: {
		port: env.VITE_PORT,
		open: true,
		// 本地跨域代理 https://cn.vitejs.dev/config/server-options.html#server-proxy
		proxy: {
			'/api': {
				target: env.VITE_APP_API_HOST,
				changeOrigin: true,
				rewrite: (path) => path.replace(/^\/api/, ''),
			},
		},
	},
});
export default EnvFn;
