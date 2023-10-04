<template>
    <select v-model="sortVal">
        <option v-for="(data,index) in data" :key="index">{{ data }}</option>
    </select>

    <button @click="sortHandle">Sort</button>
</template>

<script>
export default {
    name : 'formSortTemp',
    emits : ['sortHandler'],
    data() {
        return {
            data :['name','dob'],
            sortVal : ''
        }
    },
    methods : {
        sortHandle(){
            this.$emit('sortHandler',this.sortVal)
        }
    }
}
</script>