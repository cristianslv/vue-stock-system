import Vue from 'vue';
import App from './App.vue';
import Home from './components/Home.vue';
import List from './components/List/List.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { path: '/', component: Home },
  { path: '/empresas', component: List, props: {title: "Eu amo a minha gatinha"} }
]

// Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes, // short for `routes: routes`
})

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');