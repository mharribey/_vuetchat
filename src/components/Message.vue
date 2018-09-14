<template>
  <div class="Message">
    <div class="infos">
      <p class="author" :style="{color: color}"> {{ message.user.username || '' }}</p>
      <p class="date">{{ message.created.slice(11,16) }}</p>
    </div>
    <p class="message">{{ message.text }}</p>
  </div>
</template>


<script>
  import store from '../store'

  export default {
    name: 'Message',
    props:['message'],
    computed:{
      users () {
        return store.users
      },
      color () {
        let messageUser = this.message.user
        const user = store.users.find(user => user.username == messageUser.username)
        return user && user.color
      }
    },
  }




</script>


<style scoped>
  .Message {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 15px;
    height:100%;
    text-align: left;
    z-index: 99;
  }

  p {
    margin:0;
    font-size: 15px;
  }

  .infos {
    display: flex;
    width:12vw;
    justify-content: space-between;
  }

  .author {
    font-weight: bold;
    margin-right: 3em;
  }

  .message {
    margin:0.8em 0 1.5em;
  }
  h4{
    margin-bottom: 0;
  }
</style>
