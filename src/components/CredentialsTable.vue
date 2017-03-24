<template>
  <div class="card login-table">
    <h3 class="card-header">Credentials list</h3>

    <table class="table table-striped mb-0">
      <thead>
      <tr>
        <th>#</th>
        <th>Username</th>
        <th>Password</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(user, index) in credentials">
        <td>{{ index + 1 }}</td>
        <td>{{ user.username }}</td>
        <td>{{ user.password }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>


<style scoped="scoped">
  .login-table {
    width: 800px;
  }
</style>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'app-login-form',
    computed: {
      ...mapState([
          'credentials'
      ])
    },
    methods: {

    }
  }
</script>
