<template>
  <div class="UsersList">
    <h4>Bienvenue {{ currentUser }}</h4>
    <User v-for="user in users" :user="user"/>
    <hr/>
    <router-link to="/">déconnexion</router-link>
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
  }

  hr {
    margin:1em auto;
    width:70%;
    background: grey;
  }

</style>
