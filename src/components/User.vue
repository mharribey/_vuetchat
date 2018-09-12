<template>
  <div class="User">
    <h3>{{ user }}</h3>
  </div>
</template>


<script>
  export default {
    name: 'User',
    data() {
      return {

      }
    },
    props:["user"]
  }
</script>
