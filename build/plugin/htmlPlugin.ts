// import { Plugin as importToCDN } from 'vite-plugin-cdn-import';
import type { Plugin } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
/**
 * @description 打包时采用`cdn`模式，仅限外网使用（默认不采用，如果需要采用cdn模式，请在 .env.production 文件，将 VITE_CDN 设置成true）
 * 平台采用国内cdn：https://www.bootcdn.cn，当然你也可以选择 https://unpkg.com 或者 https://www.jsdelivr.com
 * 提醒：mockjs不能用cdn模式引入，会报错。正确的方式是，生产环境删除mockjs，使用真实的后端请求
 * 注意：上面提到的仅限外网使用也不是完全肯定的，如果你们公司内网部署的有相关js、css文件，也可以将下面配置对应改一下，整一套内网版cdn
 */
const CDN = {
	css: ['https://cdn.jsdelivr.net/npm/normalize.css@8.0.1'],
	js: [
		'https://cdn.jsdelivr.net/npm/vue@3.3.4',
		'https://cdn.jsdelivr.net/npm/ramda@0.28.0',
		'https://cdn.jsdelivr.net/npm/@element-plus/icons-vue@2.1.0',
	],
};

export default (hasCDN: boolean): Plugin => {
	return ViteEjsPlugin({
		title: 'vite-vue-ts',
		cdnCss: hasCDN ? CDN.css : [],
		cdnJs: hasCDN ? CDN.js : [],
	});
};
