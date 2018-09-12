<template>
  <div class="MessagesList">
    <Message v-for="message in messages" :message="message"/>
    <SendBox @sent="updateMessage"/>
  </div>
</template>


<script>
  import Message from "./Message"
  import SendBox from "./SendBox"

  export default {
    name: 'MessagesList',
    data() {
      return {
        messages:[
          "hey",
          "heeeey"
        ]
      }
    },
    methods:{
      updateMessage: function(message){
        this.messages.push(message)
      }
    },
    components:{
      Message,
      SendBox
    }
}
</script>

<style media="screen">

  .MessagesList {
    box-sizing: border-box;
    height:100vh;
    padding-left: 2em;
    padding-right: 35vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    background: lightgrey;
  }

</style>
