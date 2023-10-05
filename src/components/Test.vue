<template>
    <div class="Todo">
        <Header @add-button-handler="addButtonHandler"></Header>
        <div class="listItems" v-for="(data,index) in data" :key="index">
            <ListItem :itemKey="index" @delete-click-handler="deleteClickHandler">{{ data }}</ListItem>
        </div>
        <ListAdd v-show="isTodoAdd" @list-handler="listHandler" @cancel-button-handler="cancelButtonHandler"></ListAdd>
    </div>
</template>
<script >
import Header from './todo/Header.vue'
import ListItem from './todo/ListItem.vue'
import ListAdd from './todo/ListAdd.vue'
export default {
    name: "testTemp",
    components : {
        Header,
        ListItem,
        ListAdd
    },
    data(){
        return{
            isTodoAdd : false,
            data : ['Start Making a Presentation','Pay a rent','Buy a milk',],
        }
    },
    methods : {
        addButtonHandler(){
            this.isTodoAdd = true;
        },
        listHandler(val){
            this.data.push(val);
            this.isTodoAdd=false;
        },
        cancelButtonHandler(){
            this.isTodoAdd= false;
        },
        deleteClickHandler(index){
            this.data.splice(index,1)
        }
    }
}

</script>
<style>
.Todo{
    /* background-color: red; */
    position: relative;
}
</style>