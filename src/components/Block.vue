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
                marginTop: null,
                marginLeft: null
            }
        },
        mounted(){
            setTimeout(() => {
                this.showModal = true
                this.setTimer()
            },this.delay)
                this.marginTop  = this.returnRand(['50px','70px','50px','100px','220px','230px','240px','253px','422px','160px','92px','170px'])
                this.marginLeft = this.returnRand(['500px','770px','50px','100px','328px','444px','240px','253px','232px','226px','30px','170px'])
        },
        methods: {
            returnRand(items) {
                return items[Math.floor(Math.random()*items.length)];
            },
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

<style>
    .block{
        width: 200px;
        background: brown;
        border-radius: 20px;
        color: white;
        text-align: center;
        padding: 50px 0;
        margin-top: v-bind(marginTop);
        margin-left: v-bind(marginLeft);
        cursor: pointer;
    }
</style>