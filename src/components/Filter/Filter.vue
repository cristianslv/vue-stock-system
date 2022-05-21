<template>
  <div class="row">
    <div class="col-3">
      <div class="form-group">
        <input type="text" class="form-control form-control-lg" id="search" placeholder="Digite o termo">
      </div>
    </div>

    <div class="col-2 ml-0">
      <button type="submit" class="btn btn-lg full-button">Pesquisar</button>
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
export default {
  name: 'FilterComponent',
  props: {
    dataSource: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>
@import './Filter.css';
</style>