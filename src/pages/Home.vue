<template>
  <div class="Hello">
    <h1>{{ msg }}</h1>
    <router-link to="chat">Chat</router-link>
  </div>
</template>


<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: '_vuetchat'
    }
  }
}
</script>
