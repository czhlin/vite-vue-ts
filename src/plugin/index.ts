import type { App } from 'vue';
import element from './element';
import icon from './icon';
export default (app: App) => {
	element(app);
	icon(app);
	return app;
};
