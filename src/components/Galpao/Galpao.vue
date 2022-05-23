<template>
  <div class="container">
    <h2 class="text-center">{{title}}</h2>

    <div class="row mt-4">
      <div class="col">
        <input type="text" v-model="galpao.nome" class="form-control" placeholder="Nome" :disabled="disabled">
      </div>

      <div class="col">
        <input type="text" v-model="galpao.descricao" class="form-control" placeholder="Descrição" :disabled="disabled">
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input type="text" v-model="galpao.cidade" class="form-control" placeholder="Cidade" :disabled="disabled">
      </div>

      <div class="col">
        <input type="text" v-model="galpao.bairro" class="form-control" placeholder="Bairro" :disabled="disabled">
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input type="text" v-model="galpao.rua" class="form-control" placeholder="Rua" :disabled="disabled">
      </div>

      <div class="col">
        <input type="text" v-model="galpao.numero" class="form-control" placeholder="Número" :disabled="disabled">
      </div>
    </div>

    <div class="row mt-4">
      <div class="col">
        <input type="text" v-model="galpao.complemento" class="form-control" placeholder="Complemento" :disabled="disabled">
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
  name: 'GalpaoComponent',
  data() {
    return {
      galpao: {
        galpao_id: null,
        nome: '',
        descricao: '',
        cidade: '',
        bairro: '',
        rua: '',
        numero: '',
        complemento: '',
      },
      show: CONSTANTS['Galpões'].show,
      createItem: CONSTANTS['Galpões'].create,
      updateItem: CONSTANTS['Galpões'].update,
    }
  },
  methods: {
    submit() {
      if (this.galpao.galpao_id) {
        this.updateItem(this.galpao.galpao_id, this.galpao).then(data => {
          console.log(data);
        });
      } else {
        this.createItem(this.galpao).then(data => {
          console.log(data);
        })
      }

      console.log(this.galpao);
    }
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
  created() {
    if (this.$route.params.id) {
      let self = this;

      this.show(this.$route.params.id).then(data => {
        self.galpao.galpao_id = data.galpao_id;
        self.galpao.nome = data.nome;
        self.galpao.descricao = data.descricao;
        self.galpao.cidade = data.cidade;
        self.galpao.bairro = data.bairro;
        self.galpao.rua = data.rua;
        self.galpao.numero = data.numero;
        self.galpao.complemento = data.complemento;
      });
    }
  }
}
</script>