<script setup>
import Input from './components/Input.vue';


</script>

<template>
  <div class="container">
      <h1>Inputs</h1>
  </div>
  <Input></Input>
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
