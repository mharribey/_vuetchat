<template>
  <div class="SendBox">
    <form @submit.prevent="sendMessage()">
      <input type="text" name="" placeholder="Ecrivez votre message ici..." v-model="message">
      <button type="submit" name="button"><img src="../assets/send.svg"></button>
      <!-- <img class="emoji" src="../assets/emoji.svg"> -->
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
    },
    methods: {
      sendMessage: function(){
        this.$emit('sent',this.message)
        document.querySelector('input').value = ""
      }
    }
  }
</script>

<style scoped>

  .SendBox{
    min-height:3vh;
    margin:0;
    margin-bottom:1em;
    border-radius: 5px;
    width:100%;
  }
  form {
    width:100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  input{
    width:90%;
    min-height:4vh;
    border:0;
    outline: none;
    border-radius: 5px;
    padding-left: 0.8em;
    color:#717171;
    font-size: 15px;
  }
  input::placeholder{
    font-style: italic;
  }

  button {
    transform: translateX(-40px);
    border: 0;
    background: transparent;
  }

  .emoji{
    transform: translateX(-90px);
  }

  img {
    width:17px;
  }

</style>
