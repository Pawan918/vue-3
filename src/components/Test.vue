<template>
    <div   :style="{color : color_val.color}">
        {{ name }} !!Testing
        <div class="date">
            {{ date }}
        </div>
    </div>
    <input type="text" v-model="name"/>
    <button @click="makeCapital">makeCapital</button>
    <button @click="clear">Clear</button>
    <button @click="activeHandler">Active</button>
    <div class="">Selected : {{ color_val.color }}</div>
    <select v-model="color_val">
        <option disabled value="">Please select one</option>   
        <option :value="{color: 'red'}">red</option>
        <option :value="{color : 'blue'}">Blue</option>
        <option :value="{color : 'green'}">Green</option>
    </select>
</template>
<script >
export default {
    name: 'TestComp',
    data : ()=>{
        return {
            name : 'Pawan Kumar',
            date : false,
            isActive : false,
            color_val : 'white',
        }
    },
    methods : {
        makeCapital (){
            this.name = this.name.toUpperCase();
        },
        clear: function(){
            this.name = "";
        },
        activeHandler(){
            this.isActive = !this.isActive
        }
    },
    // onMounted(()=>{
    //     console.log('mounted');
    // })
    mounted (){
        console.log('mounted')
    },
    created (){
        console.log('created');
        this.date = new Date();
    },
    updated (){
        console.log('updated')
    },
    destroyed (){
        console.log('destroyed')
    }

}
</script>
<style>
.red{
    color: red;
}
</style>