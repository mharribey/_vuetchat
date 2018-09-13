<template>
  <div class="MessagesList">
    <Message v-for="message in messages" :message="message"/>
    <SendBox @sent="updateMessage"/>
  </div>
</template>


<script>
  import Message from "./Message"
  import SendBox from "./SendBox"
  import store from "../store"

  export default {
    name: 'MessagesList',
    data() {
      return {
        
      }
    },
    methods:{
      updateMessage: function(message){
        store.messages.push(message)
      }
    },
    computed: {
      messages: () => store.messages
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
    padding-right: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    background-color: rgb(233,237,239);
  }

</style>
