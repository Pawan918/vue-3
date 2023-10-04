<template>
    <div class="">
        <Timer :count="count"></Timer>
        <Control
            @start-comp="start"
            @stop-comp = 'stop'
        />
    </div>
</template>
<script >
import Timer from './Timer.vue';
import Control from './control.vue';

// import BaseButton from './baseButton.vue';
// import Form from './Form.vue';
// import List from './List.vue';

export default {
    name: "testTemp",
    data(){
        return{
            count: 0,
            timer : false,
            timerFn:null,
            
        }
    },
    components: { Timer, Control },
    methods : {
        start(){
            this.timer = true;
            // this.count++;
           this.timerFn = setInterval(this.increaseFn
            ,1000);
            // console.log('hello')
        },
        stop(){
            this.timer = false;
            clearTimeout(this.timerFn);
            console.log('clear Timeout is called')
        },
        increaseFn(){
            this.count++;
        }
    }
}

</script>
<style>

</style>