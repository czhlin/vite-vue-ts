import type { App } from 'vue';
import element from './element';
export default (app: App) => {
	element(app);
	return app;
};
