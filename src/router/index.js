import Vue from 'vue'
import VueRouter from 'vue-router'

import TestForm from '../views/TestForm'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'test',
        component: TestForm
    }
]

const router = new VueRouter({
    mode: 'history',
    routes,
    linkActiveClass: 'active'
})

export default router