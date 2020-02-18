<template>
  <div v-if="currentTutorial" class="edit-form">
    <h4>Tutorial</h4>
    <form>
      <div class="form-group">
        <label for="title">Title</label>
       <input type="text" class="form-control" id="title"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
        />
      </div>

      <div class="form-group">
        <label><strong>Status:</strong></label>
      </div>
    </form>

    <button class="badge badge-danger mr-2"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success"

    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a Tutorial...</p>
  </div>
</template>

<script>
   
  import contatoDataService from '../services/contatoDataService';

  export default {
      name:'nome',
      data(){
        return{
          currentContato: null,
          message:''
        };
      },
      methods:{
        getContato(id) {
          contatoDataService.get(id)
        .then(response => {
          this.currentContato = response.data;
          console.log(response.data);
        }).catch(e => {
          console.log(e);
        });
    }
      }
  }
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>