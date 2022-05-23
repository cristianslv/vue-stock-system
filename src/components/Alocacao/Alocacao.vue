<template>
  <div class="container">
    <h2 class="text-center">{{title}}</h2>

    <div class="row mt-4">
      <div class="col">
        <select v-model="alocacao.estoque_id" class="custom-select w-100" :disabled="disabled">
          <option value="">Selecione um estoque</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div class="col">
        <select v-model="alocacao.empresa_id" class="custom-select w-100" :disabled="disabled">
          <option value="">Selecione uma empresa</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <label for="data">Data inicial</label>
        <date-pick class="" v-model="alocacao.datainicial" :disabled="disabled"></date-pick>
      </div>

      <div class="col">
        <label for="data">Data final</label>
        <date-pick class="" v-model="alocacao.datafinal" :disabled="disabled"></date-pick>
      </div>
    </div>

    <div class="row mt-4" v-if="!disabled">
      <div class="col-12">
        <button @click="submit" class="btn btn-default w-100">Enviar</button>
      </div>
    </div>
  </div>
</template>

<script>
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';
import {CONSTANTS} from '../Table/contants';

export default {
  name: 'AlocacaoComponent',
  components: {
    DatePick
  },
  props: {
    title: {
      required: true,
      type: String
    },
    disabled: {
      required: false,
      type: Boolean
    }
  },
  methods: {
    submit() {
      if (this.alocacao.alocacao_id) {
        this.updateItem(this.alocacao.alocacao_id, this.alocacao).then(data => {
          console.log(data);
        });
      } else {
        this.createItem(this.alocacao).then(data => {
          console.log(data);
        })
      }

      console.log(this.alocacao);
    }
  },
  data() {
    return {
      alocacao: {
        alocacao_id: null,
        estoque_id: null,
        empresa_id: null,
        datainicial: '',
        datafinal: '',
      },
      show: CONSTANTS['Alocação'].show,
      createItem: CONSTANTS['Alocação'].create,
      updateItem: CONSTANTS['Alocação'].update,
    }
  },
  created() {
    if (this.$route.params.id) {
      let self = this;

      this.show(this.$route.params.id).then(data => {
        self.alocacao.alocacao_id = data.alocacao_id;
        self.alocacao.estoque_id = data.estoque_id;
        self.alocacao.empresa_id = data.empresa_id;
        self.alocacao.datainicial = data.datainicial;
        self.alocacao.datafinal = data.datafinal;
      });
    }
  },
}
</script>

<style scoped>
@import './Alocacao.css';
</style>