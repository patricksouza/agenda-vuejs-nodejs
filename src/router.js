import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    mode:"history",
    routes:[
        {
            path:'/',
            alias:'/api/',
            name:'api',
            component: () => import('./components/App')
        }
    ]
});