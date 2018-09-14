<template>
  <div class="UsersList">
    <p><b>Chatroom d'Inky</b></p>
    <div class="currentUser">
      <p> {{ currentUser.username }} </p>
      <img class="disconnect" src="../assets/disconnect.svg" @click="disconnected">
    </div>
    <p>Online users</p>
    <User v-for="user in users" :user="user"/>
  </div>
</template>



<script>
  import User from "./User"
  import store from "../store"

  export default {
    name: 'UsersList',
    data() {
      return {

      }
    },
    methods:{
      disconnected: function(){
        this.$router.push("/")
      }
    },
    components:{
      User
    },
    computed:{
      users: () => store.users,
      currentUser: () => store.currentUser
    }
  }
</script>

<style scoped>

  .UsersList {
    width:20vw;
    height:95vh;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 1em;
  }

  .currentUser{
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius:50px;
    background-image: linear-gradient(68deg, #a940ff, #7940ff);
    padding:4px 10px 0px 8px;
    transform: translateX(-2em);
    color:white;
    margin-bottom: 1em;
  }

  .currentUser p{
    margin:0;
    transform: translateY(-2px);
    padding-left: 2em;
  }

  .disconnect {
    cursor: pointer;
    width:15px;
  }

  img {
    filter:invert(1);
  }

  hr {
    margin:1em auto;
    width:70%;
    background: grey;
  }

</style>
