<template>
  <div class="Login">
    <img id="inky" class="poulpe" src="./assets/01_Animation_Base.gif">
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
    register (username){
      this.$api.userRegister(username).then((user) => {
        store.currentUser = user
        store.users.push({name: user, color:`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`})
        this.$router.push('/chat');
      })
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
    justify-content: center;
    align-items: center;
  }

  #inky {
    animation: ink 1.5s ease-in-out infinite;
    position: relative;
    margin-top:8em;
    z-index: 9999;
  }

</style>
