import Vue from 'vue';
import VueRouter from 'vue-router';

import test from "./test"

Vue.use(VueRouter); 

// 路由设置
let routes = [
	{
		path: '/',
		
	},
];

routes = routes.concat(test);

const router = new VueRouter({
	mode: 'hash',
	/* eslint-disable-next-line */
	base: __dirname,
	routes,
});

router.beforeEach((to, from, next) => {
	//todo
    console.log(to,from)

	next();
});

router.afterEach((to = {}) => {
	//todo
    console.log(to)
});

router.onError((error = {}) => {
	//todo
    console.log(error)
});

// common.$router = router;
export default router;