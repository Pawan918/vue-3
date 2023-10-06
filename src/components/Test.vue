<template>
    <div class="">
        Test{{ username }}
    </div>
</template>
<script >
export default {
    name: "testTemp",
    computed : {
        username(){
            return this.$route.params.id
        }
    }
}

</script>
<style>

</style>