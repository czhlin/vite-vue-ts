export type ContextModule<T, U extends (() => Promise<T>) | T> = Record<string, U>;
export type ContextModuleValue<T> = ContextModule<T, T | (() => Promise<T>)>;
export type ModuleOptions = {
	firstWordUpperCase?: boolean;
};
export type PathModuleCallBack<T> = () => ContextModuleValue<T>;
export interface ImportContextModule {
	<T>(path: () => ContextModule<T, T>, options?: ModuleOptions): ContextModule<T, T>;
	<T>(path: () => ContextModule<T, () => Promise<T>>, options?: ModuleOptions): ContextModule<T, () => Promise<T>>;
}
export const importContextModule: ImportContextModule = <T>(path: PathModuleCallBack<T>, options?: ModuleOptions) => {
	const modules = path();
	const result: ContextModuleValue<T> = {};
	for (const [path, iconPromise] of Object.entries(modules)) {
		const startIdx = path.lastIndexOf('/');
		const endIdx = path.lastIndexOf('.');
		let name = path.slice(startIdx + 1, endIdx);
		if (options?.firstWordUpperCase) {
			name = name.charAt(0).toUpperCase() + name.slice(1);
		}
		result[name] = iconPromise;
	}
	return result;
};
