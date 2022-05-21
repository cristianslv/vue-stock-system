<template>
  <div class="row">
    <div class="col-12 d-flex justify-content-end mt-4 list">
      <link-button text="Novo" route="/empresas"></link-button>
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
          <tr>
            <td v-for="(field, index) in fields" :key="index">
              {{field}}
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
    url: {
      required: true,
      type: String
    },
    dataSource: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      heads: CONSTANTS[this.dataSource].heads,
      fields: CONSTANTS[this.dataSource].fields,
      data: []
    }
  },
}
</script>