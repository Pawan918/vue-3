<template>
    <p>Type Something... </p>
    <p>then Hit Enter</p>
    <form @submit.prevent>
        <input @keypress="submit" type="text" v-model="name"/>
    </form>
    <ul>
        <li v-for="(item,index) in data" :key="index">{{ item }}</li>
    </ul>
</template>
<script >
export default {
    name: 'TestComp',
    data (){
        return {
            name : '',
            data : []
        }
    },
    methods : {
        submit(e) {
            if(e.keyCode === 13){
                this.data.push(this.name);
                this.name = ""
            }
        }
    }
}
</script>
<style>

</style>