<template>
  <div>
    {{title}}
  </div>
</template>

<script>
export default {
  name: 'ListComponent',
  props: {
    title: {
      required: true,
      type: String
    }
  }
}
</script>