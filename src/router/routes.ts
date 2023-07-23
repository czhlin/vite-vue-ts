export default [
	{ path: '/', component: () => import('@/views/HomeView.vue'), props: { msg: 'hello world' } },
	{ path: '/about', component: () => import('@/views/AboutView.vue') },
];
