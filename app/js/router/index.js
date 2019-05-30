import Vue from "vue"
import Router from "vue-router"
import Home from "../home/index.vue"
import Money from './../money/index.vue'
import Ious from './../ious/index.vue'
import Reise from './../raise/index.vue'
import User from './../user/index.vue'
Vue.use(Router)

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home,
		},
		{
			path: '/money',
			name: 'money',
			component: Money
		},
		{
			path:'/ious',
			name: 'ious',
			component: Ious
		},
		{
			path: '/reise',
			name: 'reise',
			component: Reise
		},
		{
			path: '/user',
			name: 'user',
			component: User
		}
	],
})
