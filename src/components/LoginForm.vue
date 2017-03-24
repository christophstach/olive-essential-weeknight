<template>
  <div class="card">
    <form method="post" @submit="submitForm">
      <h3 class="card-header">Login</h3>

      <div class="card-block">
        <div class="form-group">
          <div class="input-group">
            <div class="input-group-addon">
              <i class="fa fa-user" aria-hidden="true"></i>
            </div>
            <input class="form-control" placeholder="Username" v-model="username" required="required"
                   :disabled="loading"/>
          </div>
        </div>
        <div class="form-group mb-0">
          <div class="input-group">
            <div class="input-group-addon">
              <i class="fa fa-lock" aria-hidden="true"></i>
            </div>
            <input class="form-control" type="password" placeholder="Password" v-model="password" required="required"
                   :disabled="loading"/>
          </div>
        </div>
      </div>

      <div class="card-footer">
        <button type="submit" class="btn btn-primary" :disabled="loading">Login</button>
      </div>
    </form>
  </div>

</template>


<style scoped="scoped">
</style>


<script>
  import { mapGetters } from 'vuex';

  export default {
    name: 'app-login-form',
    data() {
      return {
        username: '',
        password: '',
        loading: false
      }
    },
    computed: {
      ...mapGetters([
        'login'
      ])
    },
    methods: {
      submitForm(e) {
        e.preventDefault();

        let username = this.username;
        let password = this.password;

        this.loading = true;
        this.$store.dispatch('doLogin', {username, password})
          .then(() => this.loading = false)
          .then(() => this.$router.push('/credentials/add'));

      }
    }
  }
</script>
