<template>
  <div class="Login">
    <LoginBox @submit="register"/>
  </div>
</template>


<script>
import LoginBox from './components/LoginBox'
import store from './store'

export default {
  name: 'Login',
  data() {
    return {
    }
  },
  components:{
    LoginBox
  },
  methods: {
    // register: function(pseudo){
    //   this.$api.userRegister({
    //   }).then((user) => {
    //     store.currentUser = user
    //   })
    // }
     register: function(user){
       store.currentUser = user
       store.users.push({name: user, color:`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`})
     }
  }
}
</script>

<style scoped>

  .Login {
    width:100vw;
    height:100vh;
    background-color: rgb(233,237,239);
    display: flex;
    align-items: center;
  }


</style>
