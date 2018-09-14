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
        let myUser = {username: user.username,avatar:null,color:randomizeColor()}
        let myUsers = []

        users.forEach((el)=>{
          el = { username: el.username,avatar:null,color:randomizeColor()}
          myUsers.push(el)
        })

        console.log(`${myUser.username} just ${type} the room`)
        store.users = myUsers
      })

      this.$api.onError((data)=> {
        console.error('Error from api:', data)
      })
    })
  }
})

function randomizeColor(){
  return "rgb(" + Math.floor(Math.random() * Math.floor(255)) + "," + Math.floor(Math.random() * Math.floor(255)) + "," + Math.floor(Math.random() * Math.floor(255)) + ")"
}

export default store
