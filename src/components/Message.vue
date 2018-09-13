<template>
  <div class="Message">
    <h4>{{ author }}</h4>
    <p>{{ message }}</p>
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

  h4{
    margin-bottom: 0;
  }
</style>
