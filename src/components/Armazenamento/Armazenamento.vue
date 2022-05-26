<template>
  <div class="container">
    <h2 class="text-center">{{title}}</h2>

    <div class="row mt-4">
      <div class="col">
        <select v-model="armazenamento.estoqueId" class="custom-select w-100" :disabled="disabled">
          <option :selected="!armazenamento.estoqueId">Selecione um Estoque</option>
  
          <option 
            v-for="(estoque, index) in estoques" 
            :key="index" 
            :value="estoque.estoqueId"
            :selected="estoque.estoqueId === armazenamento.estoqueId"
            >
            {{estoque.nomegalpao}} - {{estoque.setorestoque}}
          </option>
        </select>
      </div>

      <div class="col">
        <select v-model="armazenamento.produtoId" class="custom-select w-100" :disabled="disabled">
          <option :selected="!armazenamento.produtoId">Selecione um Produto</option>
  
          <option 
            v-for="(produto, index) in produtos" 
            :key="index" 
            :value="produto.produtoId"
            :selected="produto.produtoId === armazenamento.produtoId"
            >
            {{produto.nome}}
          </option>
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
    invalidForm() {
      return !this.armazenamento.estoqueId ||
      !this.armazenamento.produtoId ||
      !this.armazenamento.quantidade;
    },
    submit() {
      if (this.invalidForm()) {
        return alert("O estoque, produto e quantidade são obrigatórios.");
      }

      if (this.armazenamento.armazenamentoId) {
        this.updateItem(this.armazenamento.armazenamentoId, this.armazenamento).then(data => {
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
      estoques: [],
      produtos: [],
      armazenamento: {
        armazenamentoId: null,
        estoqueId: null,
        produtoId: '',
        quantidade: '',
      },
      getEstoques: CONSTANTS.Estoques.get,
      getProdutos: CONSTANTS.Produtos.get,
      show: CONSTANTS.Armazenamentos.show,
      createItem: CONSTANTS.Armazenamentos.create,
      updateItem: CONSTANTS.Armazenamentos.update,
    }
  },
  created() {
    let self = this;

    if (this.$route.params.id) {
      this.show(this.$route.params.id).then(data => {
        self.armazenamento.armazenamentoId = data.armazenamentoId;
        self.armazenamento.estoqueId = data.estoqueId;
        self.armazenamento.produtoId = data.produtoId;
        self.armazenamento.quantidade = data.quantidade;
      });
    }

    this.getProdutos().then(data => {
      self.produtos = data;
    });

    this.getEstoques().then(data => {
      self.estoques = data;
    });
  }
}
</script>