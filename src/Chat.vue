<template>
  <div class="Chat">
    <UsersList/>
    <ChatBox/>
    <img id="splash" src="./assets/taches/ta0.svg">
    <img id="inky" class="poulpe inkAnim" src="./assets/01_Animation_Base.gif" @click="poulpe">
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

  export default {
    name: 'Chat',
    data() {
      return {
      }
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
          document.getElementById("inky").classList.toggle("leaveAnim")
          this.displayInk()
          document.getElementById("inky").classList.toggle("inkAnim")
        },3000)
      },
      displayInk:function(){
        document.querySelectorAll(".tache").forEach(function(el){
          el.classList.toggle("display")
          el.classList.toggle("fadeOut")
          setTimeout(()=>{
            el.classList.toggle("display")
            el.classList.toggle("fadeOut")
          },5000)
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
    width:600px;
    z-index:9999;
  }
  #ta1 {
    top:300px;
    left:400px;
  }

  #ta2 {
    top:-50px;
    left:500px;
  }

  #ta3 {
    top:200px;
    left:1000px;
  }

  #ta4 {
    top: 200px;
    left: 400px;
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
    animation: inkOut 1.2s ease-in forwards;
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
      transform: translateY(0px);
    }100%{
      transform: translateY(500px);
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
