import * as vueRouter from 'vue-router';
import Home from '../views/Home.vue';
import TableDetail from '../components/TableDetail.vue';

const routes = [
    {
        path:"/",
        name:"Home",
        component:Home
    },
    {
        path:"/detail",
        name:"TableDetail",
        component:TableDetail
    }
]

const router = vueRouter.createRouter({
    history:vueRouter.createWebHistory(),
    routes
})

export default router;