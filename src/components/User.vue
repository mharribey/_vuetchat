<template>
  <div class="User">
    <div id="bulle" v-bind:style="{background: user.color}"></div>
    <p>{{ user.username }}</p>
  </div>
</template>


<script>
  export default {
    name: 'User',
    data() {
      return {

      }
    },
    methods: {

    },
    props:["user"]
  }


</script>

<style scoped>

  .User {
    display: flex;
    align-items: center;
    margin:0.3em 0;
  }

  #bulle {
    width:8px;
    height:8px;
    margin:0;
    margin-right:7px;
    border-radius: 50%;
    background: grey;
  }

  p {
    margin:0;
  }

</style>
