<template>
  <div class="Message">
    <h4>{{ message }}</h4>
  </div>
</template>


<script>
  export default {
    name: 'Message',
    data() {
      return {
      }
    },
    props:['message']
  }
</script>


<style media="screen">
  .Message {
    display: flex;
    align-items: flex-start;
  }
</style>
