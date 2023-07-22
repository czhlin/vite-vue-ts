import expressStaticGzip from 'express-static-gzip';
import { pathResolve } from '../uitls';
export default () => ({
	name: 'preview-static-gzip',
	configurePreviewServer(server) {
		server.middlewares.use((req, res, next) => {
			const parts = req.url.split('?');
			if (parts[0].endsWith('/')) {
				parts[0] += 'index.html';
				req.path = parts.length > 1 ? parts.join('?') : parts[0];
			} else {
				req.path = req.url;
			}
			expressStaticGzip(pathResolve('dist'), {
				enableBrotli: true,
			})(req, res, next);
		});
	},
});
