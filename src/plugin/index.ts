import type { Plugin } from 'vue';
import element from './element';
import icon from './icon';
const AppPlugin: Plugin = {
	install(app) {
		app.use(element).use(icon);
		return app;
	},
};
export default AppPlugin;
