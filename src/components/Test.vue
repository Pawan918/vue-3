<template>
    <div class="testing">
        {{ name }} !!Testing
    </div>
    <input type="text" v-model="name"/>
    <button @click="makeCapital">makeCapital</button>
    <button @click="clear">Clear</button>
</template>
<script >
export default {
    name: 'TestComp',
    data : ()=>{
        return {
            name : 'Pawan Kumar',
        }
    },
    methods : {
        makeCapital (){
            this.name = this.name.toUpperCase();
        },
        clear: function(){
            this.name = "";
        }
    },
    // onMounted(()=>{
    //     console.log('mounted');
    // })
    mounted (){
        console.log('mounted')
    },
    created (){
        console.log('created')
    },
    updated (){
        console.log('updated')
    },
    destroyed (){
        console.log('destroyed')
    }

}
</script>