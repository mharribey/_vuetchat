<template>
  <div class="MessagesList">
    <div class="channel">
      <p>{{ connectedUsers.length }}</p>
      <p>personnes connectées</p>
    </div>
    <div id="scroll">
      <div class="messageContainer">
        <p class="recent"> - Il n'y a pas de messages plus récent - </p>
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
      }
    },
    methods:{
      updateMessage: function(message){
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
      messages: () => store.messages,
      connectedUsers: () => store.users
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
    background-image: url("../assets/Fond.jpg");
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

  .back {
    width:100%;
    height:100%;
    z-index:2;
  }

  .recent {
    color:#717171;
    margin-bottom: 2em;
  }

  .messageContainer{
    min-height:10vh;
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
