import Vue from 'vue'


const store = new Vue({
  data: {
    messages: [{message: "Hey",author:null},{message: "Hola",author:null}],
    currentUser: null,
    users: [{name: "Mat",color:`rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`}]
  },
  created () {
    Vue.nextTick(() => {
      this.$api.onMessage((data) => {
        store.messages.push(data)
      })

      this.$api.onUserUpdate(({type, user, users}) => {
        console.log(`${user.username} just ${type} the room`)
        store.users = users
      })
    })
  }
})

export default store
