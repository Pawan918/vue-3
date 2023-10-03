<template>
    <p>Type Something... </p>
    <p>then Hit Enter</p>
    <form @submit.prevent>
        <input @keypress="submit" type="text" v-model="name"/>
    </form>
    <ul>
        <li v-for="(item,index) in data" :key="index">
           <span> {{ item }} </span> 
            <button @click.prevent="()=>{deleteHandler(index)}">Delete</button>
            <button @click.prevent="()=>{editHandler(index)}">Edit</button>
        </li>
    </ul>
</template>
<script >
export default {
    name: 'TestComp',
    data (){
        return {
            name : '',
            data : [],
            editIndex : false
        }
    },
    methods : {
        submit(e) {
            if(e.keyCode === 13){
                if(this.editIndex){
                    this.data.splice(this.editIndex,1,this.name)
                    this.name = "";
                    this.editIndex = false;
                }else{
                    this.data.push(this.name);
                    this.name = ""
                }
            }
        },
        deleteHandler(index){
                   this.data.splice(index,1);
        },
        editHandler(index){
            // this.data[index]
            this.editIndex = index;
            this.name = this.data[index]; 
        }
    },
}
</script>
<style>

</style>