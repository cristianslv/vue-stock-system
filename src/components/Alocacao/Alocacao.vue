<template>
  <div class="container">
    <h2 class="text-center">{{title}}</h2>

    <div class="row mt-4">
      <div class="col">
        <select v-model="alocacao.estoqueId" class="custom-select w-100" :disabled="disabled">
          <option :selected="!alocacao.estoqueId">Selecione um estoque</option>

          <option 
            v-for="(estoque, index) in estoques" 
            :key="index" 
            :value="estoque.estoqueId"
            :selected="estoque.estoqueId === alocacao.estoqueId"
            >
            {{estoque.setor}}
          </option>
        </select>
      </div>

      <select v-model="alocacao.empresaId" class="custom-select w-100" :disabled="disabled">
          <option :selected="!alocacao.empresaId">Selecione uma empresa</option>

          <option 
            v-for="(empresa, index) in empresas" 
            :key="index" 
            :value="empresa.empresaId"
            :selected="empresa.empresaId === alocacao.empresaId"
            >
            {{empresa.nome}}
          </option>
        </select>
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

      this.$router.push(CONSTANTS['Alocação'].route);
    }
  },
  data() {
    return {
      estoques: [],
      empresas: [],
      alocacao: {
        alocacaoId: null,
        estoqueId: null,
        empresaId: null,
        datainicial: '',
        datafinal: '',
      },
      getEstoquesDisponiveis: CONSTANTS['Estoques'].getAvailable,
      getEmpresas: CONSTANTS['Empresas'].get,
      show: CONSTANTS['Alocação'].show,
      createItem: CONSTANTS['Alocação'].create,
      updateItem: CONSTANTS['Alocação'].update,
    }
  },
  created() {
    let self = this;

    if (this.$route.params.id) {
      this.show(this.$route.params.id).then(data => {
        self.alocacao.alocacaoId = data.alocacaoId;
        self.alocacao.estoqueId = data.estoqueId;
        self.alocacao.empresaId = data.empresaId;
        self.alocacao.datainicial = data.datainicial;
        self.alocacao.datafinal = data.datafinal;
      });
    }

    this.getEstoquesDisponiveis().then(data => {
      self.estoques = data;
    });

    this.getEmpresas().then(data => {
      self.empresas = data;
    });
  },
}
</script>

<style scoped>
@import './Alocacao.css';
</style>