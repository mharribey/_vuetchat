<template>
  <div class="Chat">
    <h1>{{ msg }}</h1>
    <router-link to="/">Home</router-link>
    <ChatBox/>
  </div>
</template>

<script>
  import ChatBox from './components/ChatBox'

  export default {
    name: 'Chat',
    data() {
      return {
        msg: '_chat'
      }
    },
    methods: {

    },
    components: {
      ChatBox
    }
  }
</script>
