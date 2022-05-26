<template>
  <div>    
    <div class="row justify-content-center">
      <div class="col text-center">
        <link-button text="Empresas" route="/empresas"></link-button>
      </div>      
      <div class="h-100"></div>

      <div class="col mt-4 text-center">
        <link-button text="Galpões" route="/galpoes"></link-button>
      </div>
      <div class="h-100"></div>

      <div class="col mt-4 text-center">
        <link-button text="Estoques" route="/estoques"></link-button>
      </div>      
      <div class="h-100"></div>

      <div class="col mt-4 text-center">
        <link-button text="Alocações" route="/alocacoes"></link-button>
      </div>
      <div class="h-100"></div>

      <div class="col mt-4 text-center">
        <link-button text="Produtos" route="/produtos"></link-button>
      </div>
      <div class="h-100"></div>

      <div class="col mt-4 text-center">
        <link-button text="Armazenamentos" route="/armazenamentos"></link-button>
      </div>
      <div class="h-100"></div>

      <div class="col mt-4 text-center">
        <link-button text="Relatório de Produtos Armazenados" route="/relatorioprodutos"></link-button>
      </div>
      <div class="h-100"></div>
      
      <div class="col mt-4 text-center">
        <link-button text="Relatório de Estoques Ativos" route="/relatorioestoques"></link-button>
      </div>
      <div class="h-100"></div>

      <div class="col mt-4 text-center">
        <link-button text="Relatório de Histórico de Estoques" route="/relatoriohistorico"></link-button>
      </div>
    </div>    
  </div>
</template>

<script>
import LinkButton from "../components/LinkButton/LinkButton.vue";

export default {
  name: 'HomeComponent',
  components: {
    LinkButton
  },
  props: {
    msg: String
  }
}
</script>
