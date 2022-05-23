<template>
  <div class="container">
    <h2 class="text-center">{{title}}</h2>

    <div class="row mt-4">
      <div class="col">
        <input type="text" v-model="produto.nome" class="form-control" placeholder="Nome" :disabled="disabled">
      </div>

      <div class="col">
        <input type="text" v-model="produto.descricao" class="form-control" placeholder="Descrição" :disabled="disabled">
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
  name: 'ProdutoComponent',
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
      if (this.produto.produto_id) {
        this.updateItem(this.produto.produto_id, this.produto).then(data => {
          console.log(data);
        });
      } else {
        this.createItem(this.produto).then(data => {
          console.log(data);
        })
      }

      console.log(this.produto);
    }
  },
  data() {
    return {
      produto: {
        produto_id: null,
        nome: null,
        descricao: '',
      },
      getById: CONSTANTS['Produtos'].getById,
      createItem: CONSTANTS['Produtos'].create,
      updateItem: CONSTANTS['Produtos'].update,
    }
  },
  created() {
    if (this.$route.params.id) {
      let self = this;

      this.getById(this.$route.params.id).then(data => {
        self.produto.produto_id = data.produto_id;
        self.produto.nome = data.nome;
        self.produto.descricao = data.descricao;
      });
    }
  }
}
</script>