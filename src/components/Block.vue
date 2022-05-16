<template>
    <div class="block" @click="stopTimer" v-if="showModal">
        Click Me!
    </div>
</template>


<script>
    export default {
        props: ['delay'],
        data() {
            return {
                showModal:      false,
                timer:          null,
                reactionTime:   0,
            }
        },
        mounted(){
            setTimeout(() => {
                this.showModal = true
                this.setTimer()
            },this.delay)
        },
        methods: {
            setTimer() {
                this.timer = setInterval(() => {
                    this.reactionTime += 10
                }, 10);
            },
            stopTimer() {   
                clearInterval(this.timer)
                this.$emit('end', this.reactionTime)
            },
        }
    }
</script>

<style scoped>
    .block{
        width: 200px;
        background: brown;
        border-radius: 20px;
        color: white;
        text-align: center;
        padding: 50px 0;
        margin: 220px auto;
        cursor: pointer;
    }
</style>