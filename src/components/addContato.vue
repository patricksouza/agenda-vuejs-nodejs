<template>
    <div class="submit-form">
        <div v-if="!submitted">
            <div class="form-group">
                <label for="nome">Nome</label>
                <input type="text" class="form-control" id="nome" required v-model="inputs.nome" name="nome" />
            </div>

            <div class="form-group">
                <label for="ncelular">Nº do celular</label>
                <input class="form-control" id="ncelular" required v-model="inputs.ncelular" name="ncelular" />
            </div>
            <div class="form-group">
                <label for="email">E-mail</label>
                <input class="form-control" id="email" required v-model="inputs.email" name="email" />
            </div>
            <button @click="sendInputs" class="btn btn-success">Adicionar</button>
        </div>

        <div v-else>
            <h4>Contato adicionado com sucesso!</h4>
            <button class="btn btn-success" @click="add">Voltar</button>
        </div>
    </div>
</template>

<script>
    import contatoDataService from '../services/contatoDataService';

    export default {
        name: 'add-contato',
        data() {
            return {
                inputs: {
                    id: null,
                    nome: "",
                    ncelular: null,
                    email: "",
                    status: false
                },
                submitted: false
            };
        },
        methods: {
            sendInputs() {
                    var data = {
                        nome: this.inputs.nome,
                        ncelular: this.inputs.ncelular,
                        email: this.inputs.email
                    };
                    contatoDataService.create(data).then(response => {
                        console.log(response.data);
                    }).catch(e => {
                        console.log(e);
                    });
                    this.submitted = true;
                },

                add() {
                    this.submitted = false;
                    this.inputs = {};
                }
        }
    };
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>