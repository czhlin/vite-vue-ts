import { resolve } from 'path';

export const mergeConf =
	(envFnArr: Array<ProjectEnvFn>): ProjectEnvFn =>
	(env) =>
		envFnArr.reduce((preEnv, curEnvFn) => ({ ...preEnv, ...curEnvFn(env) }), {});

export const pathResolve = (dir) => {
	return resolve(process.cwd(), dir);
};
