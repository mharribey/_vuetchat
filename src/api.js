import io from "socket.io-client"

const socket = io.connect("https://")

const api = {
  userRegister(username){

  },
  messageSend(message){

  }
}

export default {
    install (Vue, options){
      Vue.prototype.$api = Vue.$api = api
    }
}
