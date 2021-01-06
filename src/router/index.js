import Vue from 'vue'
import VueRouter from 'vue-router'

import TestForm from '@/views/TestForm'
import Pokemon from '@/views/Pokemon'
import Function1 from '@/views/Function1'
import Function2 from '@/views/Function2'
import Function3 from '@/views/Function3'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'test',
        component: TestForm,
    },
    {
        path: '/pokemon',
        name: 'pokemon',
        component: Pokemon,
    },
    {
        path: '/function1',
        name: 'function1',
        component: Function1,
    },
    {
        path: '/function2',
        name: 'function2',
        component: Function2,
    },
    {
        path: '/function3',
        name: 'function3',
        component: Function3,
    },
]

const router = new VueRouter({
    mode: 'history',
    routes,
})

export default router