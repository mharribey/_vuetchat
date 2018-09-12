<template>
  <div class="ChatBox">
    <MessagesList/>
  </div>
</template>


<script>
  import MessagesList from "./MessagesList"

  export default {
    name: 'ChatBox',
    data() {
      return {

      }
    },
    components:{
      MessagesList
    }
  }
</script>

<style scoped>

  .ChatBox {
    width:100vw;
    height:100vh;
    display: flex;
    flex-direction: column;
    justify-content:space-between;
  }

</style>
