<template>
  <div class="container">
    <h2 class="text-center">{{title}}</h2>

    <div class="row mt-4">
      <div class="col">
        <select v-model="armazenamento.value" class="custom-select w-100" :disabled="disabled">
          <option value="">Selecione um Galpão - Estoque</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>

      <div class="col">
        <select v-model="armazenamento.produtoId" class="custom-select w-100" :disabled="disabled">
          <option value="">Selecione um Produto</option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input type="number" v-model="armazenamento.quantidade" class="form-control" placeholder="Quantidade" :disabled="disabled">
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
  name: 'ArmazenamentoComponent',
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
      if (this.armazenamento.armazenamento_id) {
        this.updateItem(this.armazenamento.armazenamento_id, this.armazenamento).then(data => {
          console.log(data);
        });
      } else {
        this.createItem(this.armazenamento).then(data => {
          console.log(data);
        })
      }

      this.$router.push(CONSTANTS['Armazenamentos'].route);
    }
  },
  data() {
    return {
      armazenamento: {
        value: {},
        produtoId: '',
        quantidade: '',
      },
      show: CONSTANTS.Armazenamentos.show,
      createItem: CONSTANTS.Armazenamentos.create,
      updateItem: CONSTANTS.Armazenamentos.update,
    }
  },
  created() {
    if (this.$route.params.id) {
      let self = this;

      this.show(this.$route.params.id).then(data => {
        self.armazenamento.value.estoqueId = data.estoqueId;
        self.armazenamento.value.galpaoId = data.galpaoId;
        self.armazenamento.produtoId = data.produtoId;
        self.armazenamento.quantidade = data.quantidade;
      });
    }
  }
}
</script>