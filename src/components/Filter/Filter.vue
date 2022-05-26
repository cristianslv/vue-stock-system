<template>
  <div class="row">
    <div class="col-3">
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

    <!-- <div class="col-3">
      <div class="form-group">
        <input type="text" class="form-control form-control-lg" id="search" placeholder="Digite o termo">
      </div>
    </div>

    <div class="col-3">
      <div class="form-group">
        <input type="text" class="form-control form-control-lg" id="search" placeholder="Digite o termo">
      </div>
    </div> -->
  </div>
</template>

<script>
import {CONSTANTS} from '../Table/contants';

export default {
  name: 'FilterComponent',
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
    }
  },
  watch: {
    empresaId(now, old) {
      console.log(now, old);
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