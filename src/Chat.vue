<template>
  <div class="Chat">
    <div class="ChatContent">
      <UsersList/>
      <ChatBox/>
    </div>
  </div>
</template>

<script>
  import TheHeader from "./components/TheHeader"
  import UsersList from "./components/UsersList"
  import ChatBox from "./components/ChatBox"


  export default {
    name: 'Chat',
    data() {
      return {
      }
    },
    methods: {

    },
    components: {
      UsersList,
      ChatBox,
      TheHeader
    }
  }
</script>

<style scoped>
  .Chat {
  }
  .ChatContent {
    display: flex;
    justify-content: flex-start;
  }
</style>
