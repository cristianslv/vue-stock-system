<template>
  <div class="container">
    <h2 class="text-center">{{title}}</h2>

    <div class="row mt-4">
      <div class="col">
        <select v-model="estoque.galpaoId" class="custom-select w-100" :disabled="disabled">
          <option value="">Selecione um Galpao</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div class="col">
        <input type="text" v-model="estoque.setor" class="form-control" placeholder="Setor" :disabled="disabled">
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

      console.log(this.estoque);
    }
  },
  data() {
    return {
      estoque: {
        estoqueId: null,
        galpaoId: null,
        setor: '',
      },
      show: CONSTANTS.Estoques.show,
      createItem: CONSTANTS.Estoques.create,
      updateItem: CONSTANTS.Estoques.update,
    }
  },
  created() {
    if (this.$route.params.id) {
      let self = this;

      this.show(this.$route.params.id).then(data => {
        self.empresa.estoqueId = data.estoqueId;
        self.empresa.galpaoId = data.galpaoId;
        self.empresa.setor = data.setor;
      });
    }
  }
}
</script>