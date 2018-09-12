<template>
  <div class="UsersList">
    <h2>UsersList</h2>
    <User v-for="user in users" :user="user"/>
  </div>
</template>


<script>
  import User from "./User"

  export default {
    name: 'UsersList',
    data() {
      return {
        users:[
          "Pierre",
          "Paul",
          "Jacques"
        ]
      }
    },
    components:{
      User
    }
  }
</script>

<style scoped>

  .UsersList {
    width:20vw;
    height:95vh;
  }

</style>
