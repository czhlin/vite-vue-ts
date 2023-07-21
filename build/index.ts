import defaultConf from './default.conf';
import serveConf from './serve.conf';
import buildConf from './build.conf';
import { mergeConf } from './uitls';

export default {
	serve: mergeConf([defaultConf, serveConf]),
	build: mergeConf([defaultConf, buildConf]),
};
