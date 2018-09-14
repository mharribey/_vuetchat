<template>
  <div class="Message">
    {{ color }}

    <div class="infos">
      <p class="author" :style="color"> {{ message.user.username }}</p>
      <p class="date">{{ message.created.slice(11,16) }}</p>
    </div>
    <p class="message">{{ message.text }}</p>
  </div>
</template>


<script>

  export default {
    name: 'Message',
    data() {
      return {
        color:this.getColor
      }
    },
    computed:{
      users:()=> store.users,
      getColor:()=>{
        for(let i = 0 ; i < this.users.count ; i++) {
          if(this.users[i].username == this.message.user.username){
            return this.users[i].color
          }
        }
      }
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
