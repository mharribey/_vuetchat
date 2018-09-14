<template>
  <div class="LoginBox">
    <p class="infos">Pour accéder à la chatroom, veuillez tout d'abord renseigner votre nom ou pseudo. Il sera visible par les autres dans le flux de discussion.</p>
    <p class="pseudo"><b>Nom ou pseudo</b></p>
    <form @submit.prevent="onFormSubmit">
      <input type="text" name="" placeholder="15 caractères max." v-model="pseudo">
      <button type="submit" name="button">Valider</button>
    </form>
  </div>
</template>


<script>
  export default {
    name: 'LoginBox',
    data() {
      return {
        pseudo: ""
      }
    },
    methods:{
      onFormSubmit: function(){
        if(this.pseudo.length > 0){
          this.$emit("submit",this.pseudo)
        }else{
          alert("Veuillez renseigner un pseudo")
        }
      }
    }
  }
</script>

<style scoped>

  .LoginBox {
    background: white;
    border-radius: 10px;
    padding:1em;
    width: 400px;
    /*margin: auto;*/
    display: flex;
    flex-direction: column;
    transform: translateX(-130px);
  }

  .infos {
    color:rgba(0, 0, 0, 0.3);
  }

  .pseudo {
    text-align: left;
    font-size: 0.8em;
    margin:1em 40px 0;
  }

  input {
    background: rgb(233,237,239);
    border:0;
    outline:none;
    height:3vh;
    border-radius: 5px;
    margin:1em 40px 0;
    padding-left: 0.8em;
  }

  form {
    width:100%;
    margin:0;
    display: flex;
    flex-direction: column;
  }

  button {
    width:fit-content;
    margin:2em auto 1em;
    background: #a940ff;
    color:white;
    border:0;
    border-radius: 10px;
    font-size: 1em;
    padding:5px 40px;
    transition:0.2s;
  }
  button:hover{
    background: #7314c1;
  }
  button:active{
    background: #c28ded;
  }

  a{
    color:white;
  }

</style>
