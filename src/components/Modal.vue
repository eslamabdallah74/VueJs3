<template>
    <div class="backdrop" @click.self="closeModal" :class="{dark: theme === 'dark'}">
        <div class="modal">
            <slot name="title"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'theme'
        ],
        methods: {
            closeModal(){
                this.$emit('close')
            }
        }
    }
</script>

<style scoped>
    .modal{
        padding: 20px;
        width: 400px;
        background: white;
        text-align: center;
        margin: 100px auto;
        border-radius: 20px;
    }
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        z-index: 1;
        background:#80808080;
        width: 100%;
        height: 100%;
    }
    .dark .modal{
        background: black;
        color:white;
    }
</style>