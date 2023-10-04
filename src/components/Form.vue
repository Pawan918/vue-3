<template>
    <form>
        <label for="firstName">firstName</label>
        <input class="firstName" v-model="firstName"/>
        <!-- <label for="lastName">lastName</label>
        <input class="lastName" v-model="lastName"/>
        <label for="Address">Address</label>
        <input class="address" v-model="address"/> -->
        <button @click.prevent="submit">Submit</button>
    </form>

</template>
<script >
export default {
    name : 'fromTemp',
    data () {
        return {
            firstName : ''
        }
    },
    methods : {
        submit(){
            this.$emit('showMsg',this.firstName)
        }
    }
}


</script>