<template>


  <div id="app">
    <app-navigation></app-navigation>

    <div id="alerts" class="pt-2">
      <div class="container">
        <div class="alert alert-dismissible fade" role="alert" v-for="(alert, index) in alerts"
             :class="[alert.type, {show: alert.show}]">
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
          {{ alert.text }}

        </div>
      </div>
    </div>

    <div class="container">
      <div v-if="login">
        <router-view></router-view>
      </div>
      <div v-else="login">
        <app-login-form></app-login-form>
      </div>
    </div>
  </div>
</template>

<script>
  import AppNavigation from './components/Navigation';
  import AppLoginForm from './components/LoginForm';
  import { mapState, mapGetters } from 'vuex';

  export default {
    name: 'app',
    data() {
      return {}
    },
    computed: {
      store() {
        return this.$store.state;
      },
      ...mapState([
        'jwtToken', 'alerts'
      ]),
      ...mapGetters([
        'login'
      ])
    },
    components: {
      AppLoginForm, AppNavigation
    }
  }
</script>

<style>
  #alerts {
    position: absolute;
    top: 54px;
  }

  html, body {
    height: 100%;
  }

  body {
    background-color: #007ea7;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 54px;
  }

  .alert {

    -webkit-animation-timing-function: ease;
    -moz-animation-timing-function: ease;
    -o-animation-timing-function: ease;
    animation-timing-function: ease;
  }

  @keyframes cssAnimation {
    0% {
      opacity: 0;
    }
    16% {
      opacity: 1;
    }
    84% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>
