<template>
  <div class="container">
    <h2 class="text-center">{{title}}</h2>

    <div class="row mt-4">
      <div class="col">
        <select v-model="estoque.galpaoId" class="custom-select w-100" :disabled="disabled">
          <option :selected="!estoque.galpaoId">Selecione um Galpão</option>

          <option 
            v-for="(galpao, index) in galpoes" 
            :key="index" 
            :value="galpao.galpaoId"
            :selected="galpao.galpaoId === estoque.galpaoId"
            >
            {{galpao.nome}}
          </option>
        </select>
      </div>

      <div class="col">
        <input type="text" v-model="estoque.setor" class="form-control" placeholder="Setor" :disabled="disabled">
      </div>

      <div class="col">
        <input type="text" v-model="estoque.capacidade" class="form-control" placeholder="Capacidade (m³)" :disabled="disabled">
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
import {CONSTANTS} from '../Table/contants';

export default {
  name: 'EstoqueComponent',
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
      if (this.estoque.estoqueId) {
        this.updateItem(this.estoque.estoqueId, this.estoque).then(data => {
          console.log(data);
        });
      } else {
        this.createItem(this.estoque).then(data => {
          console.log(data);
        })
      }

      this.$router.push(CONSTANTS['Estoques'].route);
    }
  },
  data() {
    return {
      galpoes: [],
      estoque: {
        estoqueId: null,
        galpaoId: null,
        setor: '',
        capacidade: null,
      },
      show: CONSTANTS.Estoques.show,
      createItem: CONSTANTS.Estoques.create,
      updateItem: CONSTANTS.Estoques.update,
      getGalpoes: CONSTANTS['Galpões'].get,
    }
  },
  created() {
    let self = this;
      
    if (this.$route.params.id) {
      this.show(this.$route.params.id).then(data => {
        self.empresa.estoqueId = data.estoqueId;
        self.empresa.galpaoId = data.galpaoId;
        self.empresa.capacidade = data.capacidade;
        self.empresa.setor = data.setor;
      });
    }

    this.getGalpoes().then(data => {
      self.galpoes = data;
    });
  }
}
</script>