/** @format */

import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";

const routes = [
	{
		path: "/",
		name: "SignIn",
		component: SignIn,
	},
	{
		path: "/register",
		name: "SignUp",
		component: SignUp,
	},
	{
		path: "/dashboard",
		name: "Dashboard",
		component: Dashboard,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
