<template>
  <div class="SendBox">
    <form v-on:submit.prevent="$emit('sent',message)">
      <input type="text" name="" v-model="message">
      <button type="submit" name="button">send</button>
    </form>
  </div>
</template>


<script>

  export default {
    name: 'SendBox',
    data() {
      return {
        message: ""
      }
    }
  }
</script>

<style scoped>

  .SendBox{
    height:5vh;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin:1em;
    margin-left: 0;
    padding:0.5em 1em;
    background-color: white;
    border-radius: 5px;
    width:100%;
  }
  form {
    width:100%;
    margin-right: 1em;
  }
  input{
    width:80%;
  }

</style>
