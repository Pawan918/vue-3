<template>
    <button @click="start">Start</button>
    <button @click="stop">Stop</button>
</template>
<script>
export default {
    name : 'controlTemp',
    emits : ['start-comp','stop-comp'],
    methods : {
        start(){
            this.$emit('start-comp')
        },
        stop(){
            this.$emit('stop-comp')
        }
    }
}

</script>