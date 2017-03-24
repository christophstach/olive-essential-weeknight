<template>
  <div id="app">
    <app-navigation></app-navigation>

    <router-view></router-view>

    <div v-if="alert !== null" class="mt-2 alert" :class="alert.type">{{ alert.message }}</div>
  </div>
</template>

<script>
  import AppNavigation from './components/Navigation';
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
        'jwtToken', 'alert'
      ]),
      ...mapGetters([
        'login'
      ])
    },
    components: {
      AppNavigation
    }
  }
</script>

<style>
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
