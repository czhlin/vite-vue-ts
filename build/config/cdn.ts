/**
 * @description 打包时采用`cdn`模式，仅限外网使用（默认不采用，如果需要采用cdn模式，请在 .env.production 文件，将 VITE_CDN 设置成true）
 * 平台采用国内cdn：https://www.bootcdn.cn，当然你也可以选择 https://unpkg.com 或者 https://www.jsdelivr.com
 * 提醒：mockjs不能用cdn模式引入，会报错。正确的方式是，生产环境删除mockjs，使用真实的后端请求
 * 注意：上面提到的仅限外网使用也不是完全肯定的，如果你们公司内网部署的有相关js、css文件，也可以将下面配置对应改一下，整一套内网版cdn
 */
export const PROJECT_CDN = {
	css: ['https://unpkg.com/normalize.css@8.0.1'],
	js: ['https://unpkg.com/ramda@0.28.0'],
	importMap: {
		vue: 'https://unpkg.com/vue@3.3.4/dist/vue.esm-browser.prod.js',
		'element-plus': 'https://unpkg.com/element-plus@2.3.8/es/index.mjs',
		'vue-router': 'https://unpkg.com/vue-router@4.2.4/dist/vue-router.esm-browser.js',
		'@vue/devtools-api': 'https://unpkg.com/@vue/devtools-api@6.1.4/lib/esm/index.js',
		'lodash-es': 'https://unpkg.com/lodash-es@4.17.21/lodash.js',
		dayjs: 'https://unpkg.com/dayjs@1.11.9/esm/index.js',
	},
};

//第三方依赖采用build分包的模式
export const VENDOR_NAME = ['element-plus', 'lodash-es', 'vue', 'dayjs'];

//第三方依赖CDN,在打包时排除
export const EXTERNAL_ARRAY = [...Object.keys(PROJECT_CDN.importMap)];
