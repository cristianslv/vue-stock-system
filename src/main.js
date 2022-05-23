import Vue from 'vue';
import App from './App.vue';
import Home from './components/Home.vue';
import List from './components/List/List.vue';
import Empresa from './components/Empresa/Empresa.vue';
import Galpao from './components/Galpao/Galpao.vue';
import Alocacao from './components/Alocacao/Alocacao.vue';
import Produto from './components/Produto/Produto.vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// Define some routes
// Each route should map to a component.
// We'll talk about nested routes later.
const routes = [
  { 
    path: '/', 
    component: Home 
  },
  { 
    path: '/empresas', 
    component: List, 
    props: {
      title: "Empresas",
    }
  },
  { 
    path: '/empresas/novo', 
    component: Empresa, 
    props: {
      title: "Nova empresa",
    }
  },
  { 
    path: '/empresas/editar/:id', 
    component: Empresa, 
    props: {
      title: "Editar empresa",
    }
  },
  { 
    path: '/empresas/visualizar', 
    component: Empresa, 
    props: {
      title: "Visualizar empresa",
      disabled: true,
    }
  },
  { 
    path: '/galpoes', 
    component: List, 
    props: {
      title: "Galpões",
    }
  },
  { 
    path: '/galpoes/novo', 
    component: Galpao, 
    props: {
      title: "Novo galpão",
    }
  },
  { 
    path: '/galpoes/editar/:id', 
    component: Galpao, 
    props: {
      title: "Editar galpão",
    }
  },
  { 
    path: '/galpoes/visualizar', 
    component: Galpao, 
    props: {
      title: "Visualizar galpão",
      disabled: true,
    }
  },
  { 
    path: '/alocacao', 
    component: List, 
    props: {
      title: "Alocação",
    }
  },
  { 
    path: '/alocacao/novo', 
    component: Alocacao, 
    props: {
      title: "Nova alocação",
    }
  },
  { 
    path: '/alocacao/editar/:id', 
    component: Alocacao, 
    props: {
      title: "Editar alocação",
    }
  },
  { 
    path: '/alocacao/visualizar', 
    component: Alocacao, 
    props: {
      title: "Visualizar alocação",
      disabled: true,
    }
  },
  { 
    path: '/produtos', 
    component: List, 
    props: {
      title: "Produtos",
    }
  },
  { 
    path: '/produtos/novo', 
    component: Produto, 
    props: {
      title: "Novo produto",
    }
  },
  { 
    path: '/produtos/editar/:id', 
    component: Produto, 
    props: {
      title: "Editar produto",
    }
  },
  { 
    path: '/produtos/visualizar', 
    component: Produto, 
    props: {
      title: "Visualizar produto",
      disabled: true,
    }
  },
  { 
    path: '/armazenamentos', 
    component: List, 
    props: {
      title: "Produtos",
    }
  },
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