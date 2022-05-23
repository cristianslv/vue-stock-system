<template>
  <div class="container">
    <h2 class="text-center mb-5">{{title}}</h2>
    
    <table-component :data-source="title"></table-component>
  </div>
</template>

<script>
import TableComponent from '../Table/Table.vue';

export default {
  name: 'ListComponent',
  components: {
    TableComponent
  },
  props: {
    title: {
      required: true,
      type: String
    },
  }
}
</script>

<style scoped>
@import './List.css';
</style>