<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="nome">Nome</label>
        <input
          type="text"
          class="form-control"
          id="nome"
          required
          v-model="input.title"
          name="nome"
        />
      </div>

      <div class="form-group">
        <label for="ncelular">Nº do celular</label>
        <input
          class="form-control"
          id="ncelular"
          required
          v-model="input.ncelular"
          name="ncelular"
        />
      </div>
      <div class="form-group">
        <label for="email">E-mail</label>
        <input
          class="form-control"
          id="email"
          required
          v-model="input.email"
          name="email"
        />
      </div>
      <button @click="sendInputs" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newTutorial">Add</button>
    </div>
  </div>
</template>

<script>
      import contatoDataService from '../services/contatoDataService';
    
      export default{
          name:'',
          data(){
              return{
                inputs:{
                    id:null,
                    nome: "",
                    ncelular:null,
                    email:"",
                    status:false
                },
                submitted:false
              };
          },
          methods:{
              sendInputs(){
                var data = {
                  nome: this.input.nome,
                  ncelular:this.input.ncelular,
                  email:this.input.email
                };
              

              contatoDataService.create(data).then(response=>{
                  console.log(response.data);
              }).catch(e=>{
                  console.log(e);
              });
              this.submitted = true;
            }
          }
      }
</script>