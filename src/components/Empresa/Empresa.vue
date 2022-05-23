<template>
  <div class="container">
    <h2 class="text-center">{{title}}</h2>

    <div class="row mt-4">
      <div class="col">
        <input type="text" v-model="empresa.nome" class="form-control" placeholder="Nome" :disabled="disabled">
      </div>

      <div class="col">
        <input type="text" v-model="empresa.cnpj" class="form-control" placeholder="CNPJ" :disabled="disabled">
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
  name: 'EmpresaComponent',
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
      if (this.empresa.empresa_id) {
        this.updateItem(this.empresa.empresa_id, this.empresa).then(data => {
          console.log(data);
        });
      } else {
        this.createItem(this.empresa).then(data => {
          console.log(data);
        })
      }

      console.log(this.empresa);
    }
  },
  data() {
    return {
      empresa: {
        empresa_id: null,
        nome: '',
        cnpj: '',
      },
      show: CONSTANTS.Empresas.show,
      createItem: CONSTANTS.Empresas.create,
      updateItem: CONSTANTS.Empresas.update,
    }
  },
  created() {
    if (this.$route.params.id) {
      let self = this;

      this.show(this.$route.params.id).then(data => {
        self.empresa.empresa_id = data.empresa_id;
        self.empresa.nome = data.nome;
        self.empresa.cnpj = data.cnpj;
      });
    }
  }
}
</script>