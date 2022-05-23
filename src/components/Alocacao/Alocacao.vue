<template>
  <div class="container">
    <h2 class="text-center">{{title}}</h2>

    <div class="row mt-4">
      <div class="col">
        <select v-model="alocacao.estoqueId" class="custom-select w-100" :disabled="disabled">
          <option value="">Selecione um estoque</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div class="col">
        <select v-model="alocacao.empresaId" class="custom-select w-100" :disabled="disabled">
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
      if (this.alocacao.alocacaoId) {
        this.updateItem(this.alocacao.alocacaoId, this.alocacao).then(data => {
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
        alocacaoId: null,
        estoqueId: null,
        empresaId: null,
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
        self.alocacao.alocacaoId = data.alocacaoId;
        self.alocacao.estoqueId = data.estoqueId;
        self.alocacao.empresaId = data.empresaId;
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