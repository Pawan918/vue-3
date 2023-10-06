<template>
    <div class="home">
        <button class="logout" @click="logout">Logout</button>
        Logout
    </div>
</template>
<script>
export default{
    name : 'logoutTemp',
    methods : {
        logout(){
            this.$router.push('/')
        }
    }
}
</script>