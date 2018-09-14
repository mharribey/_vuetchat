import Vue from 'vue'
import emitter from '@/emitter'

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

      this.$api.onCommand((data) =>{
        if(data.message.text == "/ink"){
          emitter.emit('poulpe')
        }
      })

      this.$api.onUsersUpdate(({type, user, users}) => {
        let myUser = {username: user.username,avatar:null,color:randomizeColor()}
        let myUsers = []

        if(store.users.length == 0){
          users.forEach((el)=>{
            el = { username: el.username,avatar:null,color:randomizeColor()}
            myUsers.push(el)
          })
        }


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
