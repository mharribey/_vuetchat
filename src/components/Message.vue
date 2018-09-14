<template>
  <div class="Message">
    <div class="infos">
      <p class="author" v-bind:style = ""> {{ message.user.username }}</p>
      <p class="date">{{ message.created }}</p>

    </div>
    <p class="message">{{ message.text }}</p>
  </div>
</template>


<script>

  export default {
    name: 'Message',
    data() {
      return {

      }
    },
    computed:{
      users:()=> store.users

      // getColor:()=>{
      //   for(let i = 0 ; i < this.users.count ; i++) {
      //     if(this.users[i] == message.author){
      //       return this.users[i].color
      //     }
      //   }
      // }
    },
    props:['message']
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
  }

  p {
    margin:0;
  }

  .infos {
    display: flex;
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
