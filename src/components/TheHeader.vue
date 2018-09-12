<template>
  <div class="TheHeader">
    <h1>_chat</h1>
    <router-link to="/">Home</router-link>
  </div>
</template>


<script>
  import User from "./User"

  export default {
    name: 'TheHeader',
    data() {
      return {

      }
    },
    components:{
      User
    }
  }
</script>

<style scoped>

  h1 {
    margin: 0;
  }
  .TheHeader {
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 3em;
    margin: 0 auto;
    height:5vh;
  }

</style>
