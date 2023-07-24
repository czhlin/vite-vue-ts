<script setup lang="ts">
import text from '@/assets/hello.txt';
import pdfImg from '@/assets/jspdf.jpg';
import { useRouter } from 'vue-router';
// import IconsVue from '~icons/ic/vue';
// import IconsCircleCheckFilled from '~icons/ep/circleCheckFilled';
import { HomeProps } from './types';
defineProps<HomeProps>();
const router = useRouter();
// const route = useRoute();
const download = () => {
	ElMessage.success('切换成功！');
	router.push('/about');
	// throw new Error('你好3');
	//todo
	// console.log('hello',b,env);
};
</script>
<template>
	<div>
		<h1 class="title">hello你好49{{ text }}</h1>
		<img :src="pdfImg" />
		{{ msg }}
		<!-- <el-button @click="download" :icon="IconsCircleCheckFilled">下载</el-button>
		<el-button @click="download" :icon="IconsVue">下载</el-button> -->
		<el-button @click="download">
			<ep-circle-check-filled />
			下载</el-button
		>
		<el-button type="primary" @click="download"><ic-vue />下载</el-button>
	</div>
</template>
<style lang="scss" scoped>
.title {
	color: var(--hello-world);
}
</style>
