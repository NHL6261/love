import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/love.vue'
import Copyright from '../views/copyright.vue'

Vue.use(VueRouter)

const routes = [


    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/copyright',
        name: 'copyright',
        component: Copyright
    },
    {
        path: '/',
        redirect: '/home'
    }

]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router