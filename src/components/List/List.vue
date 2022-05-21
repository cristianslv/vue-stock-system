<template>
  <div class="container">
    <h2 class="text-center mb-5">{{title}}</h2>
    
    <filter-component :data-source="title"></filter-component>
    <table-component :url="url" :data-source="title"></table-component>
  </div>
</template>

<script>
import FilterComponent from '../Filter/Filter.vue';
import TableComponent from '../Table/Table.vue';

export default {
  name: 'ListComponent',
  components: {
    FilterComponent,
    TableComponent
  },
  props: {
    title: {
      required: true,
      type: String
    },
    url: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>
@import './List.css';
</style>