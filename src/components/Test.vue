<template>
    <div class="">
        <button @click="datas">GetData</button>
    </div>
</template>
<script >
export default {
    name: "testTemp",
    methods : {
        datas(){
            this.$store.dispatch('login')
        }
    }
}

</script>
<style>

</style>