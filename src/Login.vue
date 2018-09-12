<template>
  <div class="Login">
    <h1>{{ msg }}</h1>
    <LoginBox/>
  </div>
</template>


<script>
import LoginBox from './components/LoginBox'

export default {
  name: 'Login',
  data() {
    return {
      msg: '_login'
    }
  },
  components:{
    LoginBox
  }
}
</script>
