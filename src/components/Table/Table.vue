<template>
  <div class="row">
    <div class="col-12 mt-4 list">
      <link-button text="Novo" :route="getNewRoute()"></link-button>
    </div>

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
              {{data['id']}}
            </td>

            <td width="15%">
              <button type="button" class="btn btn-default" @click="deleteItem(data)">
                Remover
              </button>
              <p></p>
              <link-button text="Visualizar" :route="getViewRoute()"></link-button>
              <p></p>
              <link-button text="Editar" :route="getEditRoute(data.id)"></link-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import LinkButton from "../LinkButton/LinkButton.vue";

import {CONSTANTS} from './contants';

export default {
  name: 'TableComponent',
  components: {
    LinkButton
  },
  props: {
    dataSource: {
      required: true,
      type: String
    }
  },
  methods: {
    getNewRoute() {
      return CONSTANTS[this.dataSource].route + '/novo';
    },
    getEditRoute(id) {
      return CONSTANTS[this.dataSource].route + '/editar/' + id;
    },
    getViewRoute() {
      return CONSTANTS[this.dataSource].route + '/visualizar';
    },
    deleteItem(data) {
      const id = data[CONSTANTS[this.dataSource].idField];
      
      this.deleteItems(id).then(data => {
        console.log(data);
      });
    }
  },
  data() {
    return {
      heads: CONSTANTS[this.dataSource].heads,
      fields: CONSTANTS[this.dataSource].fields,
      getItems: CONSTANTS[this.dataSource].get,
      createItems: CONSTANTS[this.dataSource].crate,
      updateItems: CONSTANTS[this.dataSource].update,
      deleteItems: CONSTANTS[this.dataSource].delete,
      data: []
    }
  },
  mounted() {
    let self = this;

    this.getItems().then(data => {
      self.data = data;
    }); 
  }
}
</script>

<style scoped>
@import './Table.css';
</style>