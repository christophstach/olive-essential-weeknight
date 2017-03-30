<template>

  <div class="card">
    <form method="post" @submit="submitForm">
      <h3 class="card-header">Generate it!</h3>
      <div class="card-block">
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <i class="fa fa-user" aria-hidden="true"></i>
            </div>
            <input class="form-control" placeholder="Username" v-model="username"/>
          </div>
        </div>
        <div class="form-group mb-0">
          <div class="input-group">
            <div class="input-group-addon">
              <i class="fa fa-lock" aria-hidden="true"></i>
            </div>
            <input class="form-control" placeholder="Password" v-model="password"/>
          </div>
        </div>


      </div>

      <div class="card-footer d-flex">
        <button type="button" class="btn btn-primary mr-2" @click="generateCredentials">Generate</button>
        <button type="button" class="btn btn-warning mr-auto" @click="clearForm">Clear</button>
        <button type="submit" class="btn btn-danger">Save</button>
      </div>
    </form>
  </div>

</template>


<style scoped="scoped">

</style>

<script>
  import Credentials from './../services/Credentials';

  export default {
    name: 'app-credentials-form',
    data() {
      return {
        username: '',
        password: ''
      }
    },
    methods: {
      generateCredentials() {
        let credentials = Credentials.generateRandom();

        this.username = credentials.username;
        this.password = credentials.password;
      },
      clearForm() {
        this.username = '';
        this.password = '';
      },
      submitForm(e) {
        e.preventDefault();

        let username = this.username;
        let password = this.password;



        this.$store.dispatch('addCredentials', {username, password});
        this.clearForm();
      }
    }
  }
</script>
