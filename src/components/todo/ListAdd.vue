<template>
    <div class="ListAdd">
        <img src="./../../assets/reactangle3.svg" class="rectangle-img-3" alt="">
        <div class="ListAdd-heading">
            Add Todo
        </div>
        <img src="./../../assets/reactangle4.svg" alt="" class="rectangle-img-4">
        <div class="Todo-buttons">
            <button class="button-cancel" @click="buttonCancelHandler">Cancel</button>
            <button class="button-add" @click="listHandler">Add</button>
        </div>
        <!-- <img src="./../../assets/buttons.svg" alt="" class="buttons"> -->
        <input type="text" class="Todo-input" @keyup.enter="listHandler" v-model="listText"/>
    </div>

</template>

<script>
export default {
    name : 'listAddTemp',
    emits : ['listHandler','cancelButtonHandler'],
    data (){
        return{
            listText : ""
        }
    },
    methods : {
        listHandler(){
            if(this.listText != ''){
                this.$emit('listHandler',this.listText);
                this.listText = ''
            }
        },
        buttonCancelHandler(){
            this.$emit('cancelButtonHandler');
        },
    }
}
</script>
<style>

@media screen and (max-width: 430px) {
    .ListAdd{
        position: absolute;
        top: 50px;
        /* left: 2px; */
        width: 350px;
        height: 300px;
    }
    .rectangle-img-3{
        width: 100%;
        height: 100%;
        fill: #fff;
        stroke-width: 1px;
        stroke : #EBEFF5
    }
    .ListAdd-heading{
        position: absolute;
        top: 50px;
        left:12px;
        height: 42px;
        display: flex;
        align-items: center;
        letter-spacing: 0.18px;
        line-height: 41px;
        font-size: 18px;
        color: #000;
    }
    .rectangle-img-4{
        position: absolute;
        top: 92px;
        left: 16px;
        width: 300px;
        height: 150px;
    }
    .Todo-buttons{
        position: absolute;
        top: 245px;
        left: 16px;
        display: flex;
        justify-content: space-between;
        width: 300px;
        padding: 10px;
    }
    .Todo-input{
        position: absolute;
        top: 94px;
        left: 18px;
        width: 280px;
        height: 140px;
        /* background-color: none;
         */
         font-size: 20px;
         border: none;
         outline: transparent;
    }

}
</style>
