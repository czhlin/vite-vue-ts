import type { Plugin } from 'vite';
import { ViteEjsPlugin } from 'vite-plugin-ejs';
import { PROJECT_CDN } from '../config';

export default (hasCDN: boolean): Plugin => {
	return ViteEjsPlugin({
		title: 'vite-vue-ts',
		css: [],
		js: [],
		importMap: {},
		...(hasCDN ? PROJECT_CDN : {}),
	});
};
