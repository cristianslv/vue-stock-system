<template>
  <div class="row">
    <div class="col-4">
      <select v-model="empresaId" class="custom-select w-100">
        <option :selected="!empresaId">Selecione uma Empresa</option>

        <option 
          v-for="(empresa, index) in empresas" 
          :key="index" 
          :value="empresa.empresaId"
          :selected="empresa.empresaId === empresaId"
          >
          {{empresa.nome}}
        </option>
      </select>
    </div>

    <div v-if="hasDate" class="col-4">
      <div class="form-group">
        <label for="data">Data inicial</label>
        <date-pick v-model="datainicial"></date-pick>
      </div>
    </div>

    <div v-if="hasDate" class="col-4">
      <div class="form-group">
        <label for="data">Data final</label>
        <date-pick v-model="datafinal"></date-pick>
      </div>
    </div>
  </div>
</template>

<script>
import DatePick from 'vue-date-pick';
import 'vue-date-pick/dist/vueDatePick.css';
import {CONSTANTS} from '../Table/contants';

export default {
  name: 'FilterComponent',
  components: {
    DatePick
  },
  props: {
    dataSource: {
      required: true,
      type: String
    }
  },
  data() {
    return {
      empresaId: null,
      empresas: [],
      getEmpresas: CONSTANTS['Empresas'].get,
      hasDate: CONSTANTS[this.dataSource].hasDate,
      datainicial: '',
      datafinal: '',
    }
  },
  watch: {
    empresaId(now) {
      this.$emit("empresa-id", now);
    },
    datainicial(now) {
      this.$emit("data-inicial", now);
    },
    datafinal(now) {
      this.$emit("data-final", now);
    }
  },
  created() {
    let self = this;

    this.getEmpresas().then(data => {
      self.empresas = data;
    });
  }
}
</script>

<style scoped>
@import './Filter.css';
</style>