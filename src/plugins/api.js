import io from "socket.io-client"

const socket = io.connect("https://lolhuidehuhduieolo.com")

const api = {
  get connected(){
    return socket.connected
  },

  //methods
  userRegister(username){
    return new Promise((resolve, reject) => {
      socket.once("user registered", (user) {
        resolve(user)
      })
      socket.once('error', (error) => {
        reject(error)
      })
      emitProxy('userRegister', {
        username,
        avatar
      })
    })
  },
  messageSend(message = ''){
    emitProxy('message new', message)
  },
  commandSend(command, value){
    this.messageSend(`/${command} ${value}`)
  }

  //events
  onMessage(cb){
    socket.on('message new', cb)
  },
  onUsersUpdate(cb){
    socket.on('users update', cb)
  }
}

function emitProxy(event, ...args){
  if(socket.connected){
    socket.emit(event, ...args)
  }else{
    console.log('Socket disconnected... waiting to reconnect.')
    socket.on("connect", ()=>{
      console.log('Socket reconnected.')
      socket.emit(event, ...args)
    })
  }
}

export default {
  install (Vue, options){
    Vue.prototype.$api = Vue.$api = api
  }
}
