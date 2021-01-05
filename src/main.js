import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { ValidationProvider, extend, ValidationObserver } from 'vee-validate'
import { required, email } from 'vee-validate/dist/rules'

import './assets/styles/index.css'

extend('required', {
    ...required,
    message: '{_field_} is required',
})

extend('email', {
    ...email,
    message: 'Email is invalid',
})

extend('password', {
    params: ['target'],
    validate(value, { target }) {
        return value === target
    },
    message: 'Verify password does not match',
})

Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
