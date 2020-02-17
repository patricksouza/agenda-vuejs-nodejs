import Vue from "vue";
import Router from "vue-router";

import Home from '@/components/listaContato';
import Criar from '@/components/addContato';

Vue.use(Router);

export default new Router({
    mode:"history",
    routes:[
        {
            path:'/',
            alias:'/contatos',
            name:'listar-contatos',
            //component:() => import('./components/listaContato')
            component: Home
        },
        {
            path:'/pesquisar',
            name:'pesquisar',
            component: () => import('./components/pesqContato')

        },
        {
            path:'/criar',
            name:'criar',
            component: Criar
            //component: () => import('./components/addContato')
        }
    ]
});