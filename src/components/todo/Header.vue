<template>
    <div class="header">
        <div class="header-title">
            Today
        </div>
        <div class="header-addItem">
            <span class="header-addItem__svg">
                <img src="./../../assets/bi_plus-circle.svg">
            </span>
        </div>
    </div>
</template>

<script>
import TodoCircle from '../icons/TodoCircle.vue';

export default{
    components : {
        TodoCircle
    },
    data(){
        return {
            // TodoSvg : require('./../../assets/bi_plus-circle.svg')
        }
    }
}

</script>

<style>
@media screen and (max-width : 430px){
    .header{
        display: flex;
        height: 73px;
        padding: 16px 12px 16px 16px;
        justify-content: space-between;
        align-items: center;
    }
}
</style>