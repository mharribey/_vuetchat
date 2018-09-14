<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default {
  name: 'App'
}

</script>


<!-- CSS -->


<style>
  *::-webkit-scrollbar {
    display: none;
  }
  html, body{
    margin:0;
    overflow: hidden;
    font-family: 'Source Sans Pro', 'Open Sans', sans-serif;
    color:#333;
  }
  p {
    font-size: 14px;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
    text-decoration: none;
  }
  button {
    outline: none;
    cursor: pointer;
  }

  .display {
    display: none;
  }
  .poulpe {
    position: absolute;
    width:300px;
  }

  @keyframes ink{
    0%{
      transform:translateY(0);
    }50%{
      transform:translateY(20px);
    }100%{
      transform:translateY(0);
    }
  }


</style>
