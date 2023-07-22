import { defineComponent } from 'vue';

export default defineComponent({
	setup(_, ctx) {
		return () => <el-icon>{ctx.slots?.default?.()}</el-icon>;
	},
});
