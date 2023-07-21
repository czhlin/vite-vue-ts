import { getCurrentInstance } from 'vue';
export default () => {
	const instance = getCurrentInstance();
	return instance?.proxy;
};
