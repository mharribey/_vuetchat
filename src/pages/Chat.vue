<template>
  <div class="Chat">
    <h1>{{ msg }}</h1>
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
  export default {
    name: 'Chat',
    data () {
      return {
        msg: '_chat'
      }
    }
  }
</script>
