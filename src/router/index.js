import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
const routes = [
	{
		path: "/",
		redirect: '/Home'
	},
	{
		path: "/Home",
		component: () => import("@/pages/Home.vue"),
		children: [
			{
				path: "/Home",
				redirect: '/Home/Introduce'
			},
			{
				path: "Article",
				component: () => import("@/pages/Article.vue"),
			},
			{
				path: "Introduce",
				component: () => import("@/pages/Introduce.vue"),
			}
		]
	},

	
	
];
var router = new VueRouter({
	routes,
});
export default router;