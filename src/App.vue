<script setup lang="ts">
// import Home from '@/views/HomeView.vue';
import useGlobalAppProperties from '@/hooks/useGlobalAppProperties';
const $G = useGlobalAppProperties();
</script>

<template>
	<el-config-provider v-bind="$G?.$ELEMENT">
		<!-- <Home msg="hello world!4" /> -->
		<router-view />
	</el-config-provider>
</template>

<style lang="scss" scoped>
.content {
	color: var(--hello-world);
}
</style>
