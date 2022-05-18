<script setup>
import Project from './components/Block.vue';
import Results from './components/Results.vue';
import Block from './components/Block.vue';

</script>

<template>
  <div class="container">
      <h1>Reaction timer</h1>
      <div class="playButton"><button :disabled="isPlaying" @click="start">Play</button></div>
      <Results  v-if="showResults" :score="score"></Results>
      <Block  v-if="isPlaying" :delay="delay" @end="endGame"></Block>

  </div>
</template>

<script>
  export default {
    name:'App',
    components: {
      Block,
      Results
    },
    data() {
      return {
        isPlaying:    false,
        delay:        null,
        score:        null,
        showResults:  false,
      }
    },
    methods: {
      start() {
        this.delay        = 100 + Math.random() * 5000
        this.isPlaying    = true
        this.showResults  = false
      },
      endGame(reactionTime) {
        this.score       = reactionTime
        this.isPlaying   = false
        this.showResults = true
      }
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
    border: 1px solid black;
    border-radius: 10px;
    background: white;
    color:black;
    cursor: pointer;
  }
  .playButton button:disabled,
  button[disabled]{
    opacity: 0.5;
    cursor: not-allowed;
  } 
</style>
