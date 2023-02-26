import {createRouter, createWebHistory} from 'vue-router'
import AccountsView from "@/views/account/AccountsView.vue";
import {menu} from "@/util/menu/MenuList";
import NewAccountView from "@/views/account/NewAccountView.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: menu.HEADER.index.url,
            name: menu.HEADER.index.name,
            component: AccountsView
        },
        {
            path: '/account',
            name: 'account',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: AccountsView
            // component: () => import('../views/AboutView.vue')
        },
        {
            path: menu.HEADER.newaccount.url,
            name: menu.HEADER.newaccount.name,
            component: NewAccountView
        },
    ]
})

export default router
