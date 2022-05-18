<script setup>
import Input from './components/Input.vue';


</script>

<template>
  <div class="container">
      <h1>Router View</h1>
  </div>
  <router-link to="/">Home</router-link>
  <br>
  <router-link :to="{name: 'Games'}">Games</router-link>
  <router-view></router-view>
</template>

<script>

  export default {
    name:'App',
    components: {
      Input
    },
    data() {
      return {

      }
    },
    methods: {

    }
  }
</script>

<style>
  .router-link-active{
    color: green;
    font-weight: bold;
  }
  .container{
    text-align: center;
    margin: 10px auto;
  }
  h1, .playButton {
    text-align: center;
  }
  .playButton button{
    padding: 20px 30px;
    border: 1px solid white;
    border-radius: 10px;
    background: brown;
    color:white;
    cursor: pointer;
  }
  .playButton button:disabled,
  button[disabled]{
    opacity: 0.5;
    cursor: not-allowed;
  } 
</style>
