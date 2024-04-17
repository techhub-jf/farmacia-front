import { createWebHistory, createRouter } from "vue-router";
import Main from "@/views/Main.vue";
import Login from "@/views/Login/Login.vue";
import Sales from "@/views/Sales/Sales.vue";
import Products from "@/views/Products/Products.vue";
import Settings from "@/views/Settings/Settings.vue";

const routes = [
	{
		path: "/",
		name: "main",
		redirect: "/sales",
		component: Main,
		children: [
			{
				path: "/sales",
				name: "sales",
				component: Sales,
				meta: { title: "Entregas" },
			},
			{
				path: "/products",
				name: "products",
				component: Products,
				meta: { title: "Medicamentos" },
			},
            {
				path: "/settings",
				name: "settings",
				component: Settings,
				meta: { title: "Configurações" },
			},
		],
	},
	{
		path: "/login",
		name: "login",
		component: Login,
		meta: {
			title: "Login",
			metaTags: [
				{
					name: "X-UA-Compatible",
					content: "ie=edge",
				},
				{
					property: "viewport",
					content: "width=1024",
				},
			],
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes: routes,
});

router.beforeEach((to) => {
	if (to.meta.title) {
		const title = <string>to.meta.title;
		document.title = title;
	} else {
		document.title = "Farmacia TechHub";
	}
});

export default router;
