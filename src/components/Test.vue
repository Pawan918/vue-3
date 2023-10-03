<template>
    <div class="testing">
        {{ name }} !!Testing
    </div>
    <input type="text" v-model="name"/>
</template>
<script>
export default {
    name: 'TestComp',
    data (){
        return {
            name : 'Pawan Kumar',
        }
    }
}
</script>