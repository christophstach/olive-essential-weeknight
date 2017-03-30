<template>


  <div id="app">
    <app-navigation></app-navigation>

    <div class="alert-list">
      <transition-group
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        tag="div"
        class="container pt-2"
        name="alert-list"
      >
        <div v-for="(alert, index) in alerts" class="alert" role="alert" :key="alert.$key" :class="alert.type">
          <div>{{ alert.text }}</div>
        </div>
      </transition-group>

    </div>


    <div class="container">
      <div v-if="login">
        <transition
          key="component"
          appear
          mode="out-in"
          enter-active-class="animated fadeIn"
          leave-active-class="animated hinge"
        >
          <router-view></router-view>
        </transition>
      </div>
      <div v-else="login">
        <transition
          key="component"
          appear
          mode="out-in"
          enter-active-class="animated shake"
          leave-active-class="animated shake"
        >
          <app-login-form></app-login-form>
        </transition>
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
  .alert-list {
    position: absolute;
    top: 54px;
    z-index: 10000;
  }

  .alert-list-move {
    transition: transform 1s;
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
</style>
