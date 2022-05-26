<template>
  <div class="row">
    <div v-if="!isReport" class="col-12 mt-4 list">
      <link-button text="Novo" :route="getNewRoute()"></link-button>
    </div>
    
    <filter-component v-if="isReport" @empresa-id="changeEmpresaId"></filter-component>

    <div class="col-12">
      <table class="table table-striped table-dark mt-4" aria-describedby="list table">
        <thead>
          <tr>
            <th scope="col" v-for="(head, index) in heads" :key="index">
              {{head}}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(data, index) in data" :key="index">
            <td v-for="(field, indexx) in fields" :key="indexx">
              {{data[field]}}
            </td>

            <td v-if="!isReport" width="15%">
              <button type="button" class="btn btn-default" @click="deleteItem(data)">
                Remover
              </button>
              <p></p>
              <link-button text="Visualizar" :route="getViewRoute(data)"></link-button>
              <p></p>
              <link-button text="Editar" :route="getEditRoute(data)"></link-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import LinkButton from "../LinkButton/LinkButton.vue";
import FilterComponent from "../Filter/Filter.vue";

import {CONSTANTS} from './contants';

export default {
  name: 'TableComponent',
  components: {
    LinkButton,
    FilterComponent
  },
  props: {
    dataSource: {
      required: true,
      type: String
    }
  },
  computed: {
    isReport() {
      return CONSTANTS[this.dataSource].isReport;
    }
  },
  methods: {
    changeEmpresaId(value) {
      console.log(value);
      let self = this;

      this.getRelatorioItems({empresaId: value}).then(dataset => {
        self.data = dataset;
      })
    },
    getNewRoute() {
      return CONSTANTS[this.dataSource].route + '/novo';
    },
    getEditRoute(data) {
      const id = data[CONSTANTS[this.dataSource].idField];

      return CONSTANTS[this.dataSource].route + '/editar/' + id;
    },
    getViewRoute(data) {
      const id = data[CONSTANTS[this.dataSource].idField];

      return CONSTANTS[this.dataSource].route + '/visualizar/' + id;
    },
    deleteItem(data) {
      const id = data[CONSTANTS[this.dataSource].idField];
      
      this.deleteItems(id).then(() => {
        location.reload();
      });
    }
  },
  data() {
    return {
      heads: CONSTANTS[this.dataSource].heads,
      fields: CONSTANTS[this.dataSource].fields,
      getRelatorioItems: CONSTANTS[this.dataSource].getRelatorioItems,
      getItems: CONSTANTS[this.dataSource].get,
      createItems: CONSTANTS[this.dataSource].crate,
      updateItems: CONSTANTS[this.dataSource].update,
      deleteItems: CONSTANTS[this.dataSource].delete,
      data: []
    }
  },
  mounted() {
    let self = this;

    if (!this.isReport) {
      this.getItems().then(data => {
        self.data = data;
      }); 
    }
  }
}
</script>

<style scoped>
@import './Table.css';
</style>