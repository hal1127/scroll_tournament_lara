require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router'
import axios from 'axios';
import VueAxios from 'vue-axios';

window.Vue = require('vue');
Vue.use(VueRouter);
Vue.use(VueAxios, axios);



const app = new Vue({
    el: '#app',
    router,
});
