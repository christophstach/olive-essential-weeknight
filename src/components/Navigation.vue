<template>
  <nav id="main-nav" class="navbar navbar-toggleable-sm navbar-light fixed-top">

    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
            data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false"
            aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <a class="navbar-brand" href="#">
      <span v-if="appBusy" class="fa fa-spinner fa-spin" aria-hidden="true"></span>
      <span v-else="appBusy">Credz!</span>
    </a>


    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
      <ul class="navbar-nav mr-auto">

      </ul>

      <ul class="navbar-nav" v-if="login">

        <li class="nav-item dropdown">
          <a class="nav-link py-0" href="#" id="dropdown01" data-toggle="dropdown"
             aria-haspopup="true" aria-expanded="false">
            <img id="profile-picture" class="rounded-circle" src="static/adrian-saiz-ferri.jpg" v-bind:alt="username">
          </a>
          <div class="dropdown-menu  dropdown-menu-right" aria-labelledby="dropdown01">
            <!--<router-link class="dropdown-item" to="/profile">Profile</router-link>-->
            <router-link class="dropdown-item" to="/credentials/add">Add credentials</router-link>
            <router-link class="dropdown-item" to="/credentials/list">List of credentials</router-link>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#" @click="doLogout">Logout</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>


</template>


<style scoped="scoped">
  #main-nav {
    background-color: #fff;
  }

  #profile-picture {
    width: 40px;
  }
</style>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex';

  export default {
    name: 'app-navigation',
    data() {
      return {
        username: "Adrian Saiz Ferri"
      }
    },
    computed: {
      ...mapGetters([
        'login',
        'appBusy'
      ])
    },
    methods: {
      ...mapActions([
        'doLogout'
      ])
    }
  }
</script>



