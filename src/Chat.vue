<template>
  <div class="Chat">
    <UsersList/>
    <ChatBox/>
    <img id="splash" src="./assets/taches/ta0.svg">
    <img id="inky" class="poulpe inkAnim" src="./assets/01_Animation_Base.gif" @mouseover="help" @mouseleave="help">
    <img id="inkyLeave" class="display" src="./assets/01_Animation_Sortie.gif">

    <div id="popin" class="display">
      <img src="./assets/help-bubble.svg">
      <p>Complétez la commande <br> avec le nom ou le pseudo <br> de la personne à qui <br>vous souhaitez m'envoyer ! </p>
    </div>

    <img id="ta1" class="tache display" src="./assets/taches/ta1.svg">
    <img id="ta2" class="tache display" src="./assets/taches/ta2.svg">
    <img id="ta3" class="tache display" src="./assets/taches/ta3.svg">
    <img id="ta4" class="tache display" src="./assets/taches/ta4.svg">

  </div>
</template>

<script>
  import TheHeader from "./components/TheHeader"
  import UsersList from "./components/UsersList"
  import ChatBox from "./components/ChatBox"
  import emitter from '@/emitter'

  export default {
    name: 'Chat',
    data() {
      return {
      }
    },
    mounted() {
      emitter.on('poulpe', this.poulpe)
    },
    methods: {
      help: function(){
        document.getElementById("popin").classList.toggle("display")
      },
      poulpe: function(){
        document.getElementById("inky").classList.toggle("inkAnim")
        document.getElementById("inky").classList.toggle("leaveAnim")
        document.getElementById("inkyLeave").src = "/static/img/01_Animation_Sortie.c19aacf.gif"

        setTimeout(()=>{
          document.getElementById("inkyLeave").classList.toggle("display")
        },1600)

        setTimeout(()=>{
          document.getElementById("inkyLeave").classList.toggle("display")
          document.getElementById("inkyLeave").src = ""
          document.getElementById("inky").classList.toggle("inkAnim")
        },3000)

        setTimeout(()=>{
          this.displayInk()
          document.getElementById("inky").classList.toggle("leaveAnim")
        },4000)

      },
      displayInk:function(){
        document.querySelectorAll(".tache").forEach(function(el){
          el.classList.toggle("display")
          el.classList.toggle("fadeOut")
          setTimeout(()=>{
            el.classList.toggle("display")
            el.classList.toggle("fadeOut")
          },6000)
        })

      }
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

  .tache {
    position: absolute;
    width:45vw;
    z-index:9999;
  }
  #ta1 {
    top:10vh;
    left:30vw;
  }

  #ta2 {
    top:0vh;
    left:20vw;
  }

  #ta3 {
    top:40vh;
    left:60vw;
  }

  #ta4 {
    top: 20vh;
    left: 20vw;
  }

  .fadeOut {
    animation: fadeOut 5s ease-in-out forwards;
  }

  #splash {
    width:400px;
    position: absolute;
    bottom: 0;
    right:0;
    transform: translate3d(140px,120px,0);
  }
  #inky {
    bottom:30px;
    right:10px;
    cursor:pointer;
  }

  #inkyLeave {
    position: absolute;
    width:100vw;
    right:20px;
  }

  #popin{
    position: absolute;
    width:250px;
    bottom:300px;
    right:115px;
    filter:invert(1);
  }

  .inkAnim {
    animation: ink 1.5s ease-in-out infinite;
  }
  .leaveAnim {
    animation: inkOut 5s forwards;
  }


  #popin p {
    position: absolute;
    top:0;
    left:40px;
    font-size: 14px;
    color:white;
  }

  @keyframes inkOut{
    0%{
      transform: translate3d(0,0,0);
    }20%{
      transform: translate3d(0,40vh,0);
    }60%{
      transform: translate3d(-40vw,40vh,0);
    }80%{
      transform: translate3d(-40vw,-40vh,0);
    }100%{
      transform: translate3d(0,0,0);
    }100%{
      transform: translate3d(-40vw,40vh,0);
    }
  }

  @keyframes fadeOut {
    0%{
      transform: translateY(0);
      opacity: 1;
    80%{
      opacity: 1;
    }
    }100%{
      opacity: 0;
      transform: translateY(300px);
    }
  }
</style>
