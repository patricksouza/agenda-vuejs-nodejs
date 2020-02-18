import Vue from "vue";
import Router from "vue-router";

import Home from '@/components/listaContato';
import Criar from '@/components/addContato';
import Editar from '@/components/contatos';

Vue.use(Router);

export default new Router({
    mode:"history",
    routes:[
        {
            path:'/',
            alias:'/contatos',
            name:'listar-contatos',
            component: Home
        },
        {
            path:'/editar/:id',
            name:'editar-form',
            component:()=> Editar
        },
        {
            path:'/criar',
            name:'criar',
            component: Criar
        }
    ]
});