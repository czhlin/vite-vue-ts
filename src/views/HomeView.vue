<script setup lang="ts">
import IconsVue from '~icons/ic/vue';
import IconsCircleCheckFilled from '~icons/ep/circleCheckFilled';
import { HomeProps } from './types';
defineProps<HomeProps>();
const download = () => {
	throw new Error('你好3');
	//todo
	// console.log('hello',b,env);
};
</script>
<template>
	<div>
		<h1 class="title">hello你好49</h1>
		<img src="https://www.wenjiangs.com/wp-content/uploads/2020/09/jspdf.jpg" />
		{{ msg }}
		<el-button @click="download" :icon="IconsCircleCheckFilled">下载</el-button>
		<el-button @click="download" :icon="IconsVue">下载</el-button>
	</div>
</template>
<style lang="scss" scoped>
.title {
	color: $hello;
}
</style>
