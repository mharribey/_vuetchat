import Vue from 'vue'

const store = new Vue({
  data: {
    messages: [],
    currentUser: null,
    users: []
  },
  created () {
    Vue.nextTick(() => {
      this.$api.onMessage((data) => {
        store.messages.push(data.message)
      })

      this.$api.onUsersUpdate(({type, user, users}) => {
        console.log(`${user.username} just ${type} the room`)
        store.users = users
      })

      this.$api.onError((data)=> {
        console.error('Error from api:', data)
      })
    })
  }
})

export default store
