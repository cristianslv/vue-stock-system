<template>
  <div>
    <router-link :to="route" class="btn btn-lg btn-block">
      {{text}}
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'LinkButton',
  props: {
    text: {
      required: true,
      type: String
    },
    route: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>
@import './LinkButton.css';
</style>
