import Vue from 'vue';
import VueRouter from 'vue-router';

import AppCredentialsTable from './components/CredentialsTable';
import AppCredentialsForm from './components/CredentialsForm';
import AppLoginForm from './components/LoginForm';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {path: '/credentials/add', component: AppCredentialsForm},
    {path: '/credentials/list', component: AppCredentialsTable}
  ]
});

export default router;
