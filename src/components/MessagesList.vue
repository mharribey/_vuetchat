<template>
  <div class="MessagesList">
    <div class="channel">
      <p>{{ connectedUsers.length }}</p>
      <p>personnes connectées</p>
    </div>
    <div id="scroll">
      <div class="messageContainer">
        <Message v-for="message in messages" :message="message"/>
      </div>
    </div>
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
        connectedUsers: store.users
      }
    },
    methods:{
      updateMessage: function(message){
        console.log(store.users)
        let d = new Date()
        let h = d.getHours()
        let m = d.getMinutes()

        if(d.getHours() < 10){
          h = `0${d.getHours()}`
        }
        if(d.getMinutes() < 10){
          m = `0${d.getMinutes()}`
        }

        let container = document.getElementById("scroll")
        store.messages.push({message:message,author:store.currentUser,date:`${h}:${m}`})
        setTimeout(()=>{
          container.scrollTop = container.scrollHeight
        },50)

        this.$api.messageSend(message)
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

    background-color: rgb(233,237,239);
  }

  #scroll {
    width:100%;
    height:100%;
    overflow: scroll;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
  }

  .messageContainer{
    height:10vh;
  }

  .channel {
    position: absolute;
    top:0;
    right:0;
    padding: 1em 2em;
    text-align: right;
    font-size: 14px;
  }

  .channel p {
    margin:0;
  }

</style>
