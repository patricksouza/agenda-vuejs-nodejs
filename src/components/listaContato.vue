<template>
    <div class="list row">
        <div class="col-md-8">
            <div class="input-group mb-3">
                <input type="text" class="form-control" placeholder="Pesquisar por nome" v-model="nome" />
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" @click="searchTitle">
                        Pesquisar
                    </button>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <h4>Lista de contatos</h4>
            <ul class="list-group">
                <li class="list-group-item" :class="{active: index == currentIndex}" v-for="(contato, index) in contatos" :key="index" @click="setActiveContatos(contato, index)">
                    {{ contato.nome }}
                </li>
            </ul>

            <button class="m-3 btn btn-sm btn-danger" @click="removeAllContatos">
                Remover todos
            </button>
        </div>
        <div class="col-md-8">
            <div v-if="currentContato">
                <h4>Contato</h4>
                <div>
                    <label><strong>Nome:</strong></label> {{ currentContato.nome }}
                </div>
                <div>
                    <label><strong>E-mail:</strong></label> {{ currentContato.email }}
                </div>
                <div>
                    <label><strong>Nº celular:</strong></label> {{ currentContato.ncelular }}
                </div>

                <!--<a class="badge badge-warning" :href="'/tutorials/' + currentContato.id">Editar</a>-->
                <a class="btn btn-sm btn-info" :href="'/editar/' + currentContato.id">Editar</a>
            </div>
            <div v-else>
            </div>
        </div>
    </div>
</template>

<script>
    import contatoDataService from '../services/contatoDataService';

    export default {
        name: 'contatos-lista',
        data() {
            return {
                contatos: [],
                currentContato: null,
                currentIndex: -1,
                nome: ''
            };
        },
        methods: {
            retrieveContatos() {
                    contatoDataService.getAll().then(response => {
                        console.log(response.data);
                    }).catch(e => {
                        console.log(e);
                    });
                },
                refreshList() {
                    this.retrieveContatos();
                    this.currentContato = null;
                    this.currentIndex = -1;
                },
                setActiveContatos(contato, index) {
                    this.currentContato = contato;
                    this.currentIndex = index;
                },
                removeAllContatos() {
                    contatoDataService.deleteAll().then(response => {
                        console.log(response.data);
                        this.refreshList();
                    }).catch(e => {
                        console.log(e);
                    });
                },
                searchTitle() {
                    contatoDataService.findByNome(this.nome)
                        .then(response => {
                            this.contatos = response.data;
                            console.log(response.data);
                        }).catch(e => {
                            console.log(e);
                        });
                }
        },
        mounted() {
            this.retrieveContatos();
        }
    };
</script>