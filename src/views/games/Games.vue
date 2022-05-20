<template>
    <div>
        <h1>List of Games</h1>
    </div>
    <div style="display:inline-block ;" v-for="game in games" :key="game.name">
        <router-link :to="{ name: 'Game', params: {id: game.name} }">
            <div>
                {{ game.name }}
            </div>
            <img :src="game.imgpath" :alt="game.name">
        </router-link>
    </div>
</template>

<script>
    export default {
    data() {
        return {
            games: [
                {name : 'PUBG',                 imgpath: './src/assets/games/pubg.jpeg'},
                {name : 'The Last Of Us',       imgpath: './src/assets/games/lastofus.png'},
                {name : 'Sword Art Online',     imgpath: './src/assets/games/sao2.png'},
                {name : 'BattleFiled',          imgpath: './src/assets/games/download.jpeg'}

            ],
            
        }
    }
    }
</script>