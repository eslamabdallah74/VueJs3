<template>
    <h3>MouseEvents</h3>

    <div class="box" @mouseover="mouseEvenet($event,0)">{{ eventsNames[0] }} </div>
    <div class="box" @mouseleave="mouseEvenet($event,1)">{{ eventsNames[1] }}</div>
    <div class="box" @dblclick="mouseEvenet($event,2)">{{ eventsNames[2] }}</div>
    <div class="box" @mousemove="mouseMoveEvent">Div Mouse Position {{ x }} - {{ y }}</div>

    <h3>V-FOR</h3>
    <ul>
        <li v-for="(anime, key) in animes" :class="{fav: anime.isFav }" @click="changeFav(key)">
            <h5> Anime Name : {{ anime.anime_name }} </h5>
            <span>Rate: {{ anime.rate }}</span>
            <div>Favorite: {{ anime.isFav }}</div>
        </li>
    </ul>
    <h3>Computed (only fav animes)</h3>
    <ul>
        <li v-for="(anime, key) in filterdBooks" :class="{fav: anime.isFav }">
            <h5> Anime Name : {{ anime.anime_name }} </h5>
            <span>Rate: {{ anime.rate }}</span>      
         </li>
    </ul>

</template>

<script>
// my-component.js
export default {
  data() {
    return {
         eventsNames: ['Mouseover','Mouseleave','DoubelClick'],
         x: 0,
         y: 0,
         isTrue: '',
         animes: [
             { anime_name: 'naruto' , rate: '10-10', isFav: true},
             { anime_name: 'bleach' , rate: '8-10', isFav: false},
             { anime_name: 'hunter X hunter' , rate: '7-10', isFav: true},
             { anime_name: 'dragon ball' , rate: '7-10', isFav: false},
             { anime_name: 'tom & herry' , rate: '4-10', isFav: true},            
         ]
        }
  },
  methods: {
    mouseEvenet(e,arg) {
        console.log('event type ' + e.type + ' and the div name is ' + this.eventsNames[arg] )

    },
    mouseMoveEvent(e) {
        this.x = e.offsetX
        this.y = e.offsetY
    },
    changeFav(key){
        this.animes[key].isFav = !this.animes[key].isFav
    }
  },
  computed: {
      filterdBooks() {
          return this.animes.filter((anime) => anime.isFav)
      }
  }
}
</script>

<style scoped>
    h1,h3{
        text-align: center;
        margin: 10px 0;
        font-weight: bold;
        text-decoration: underline;
    }
    ul{
        list-style-type: none;
        display: flex;
    }
    ul li {
        background: black;
        color:white;
        padding: 20px;
        border-radius: 20px;
        margin: 0px 5px;
        text-align: center;
        transition: 0.4s ease-in-out ;
        cursor: pointer;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -o-user-select: none;
        user-select: none;
    }
    .fav {
        background: #fafa;
        color:black;
    }
    .box{
        width: 600px;
        height: 200px;
        margin: 20px;
        padding:20px 0;
        color: white;
        background: black;
        display: inline-block;
        text-align: center;
    }
</style>