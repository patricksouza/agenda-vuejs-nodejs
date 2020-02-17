import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
    mode:"history",
    routes:[
        {
            path:'/',
            alias:'/contatos',
            name:'listar-contatos',
            component:() => import('./components/listaContato')
        },
        {
            path:'/pesquisar',
            name:'pesquisar-contato',
            component: () => import('./components/pesqContato')
        },
        {
            path:'/criar',
            name:'adicionar-contato',
            component: () => import('./components/addContato')
        }
    ]
});