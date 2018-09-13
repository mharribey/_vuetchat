<template>
  <div class="Chat">
    <UsersList/>
    <ChatBox/>
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
    display: flex;
    justify-content: flex-start;
  }

</style>
