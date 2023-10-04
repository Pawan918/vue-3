<template>
    
</template>
<script >
export default {
    name : "baseButton",
    props : ['backgroundColor','text','data'],
    data () {
        return {
            name: 'button'
        }
    },
    methods : {
        clickHandler(){
            if(this.data === 'alert'){
                alert("first button is clicked")
            }else{
                this.name = this.name.split("").reverse().join("");
            }
        }
    }
}
</script>
<style>

</style>