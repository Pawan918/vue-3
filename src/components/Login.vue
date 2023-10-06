<template>
    <div class="home">
        <button class="logout" @click="logout">Logout</button>
        <p>{{ this.$route.params.name }}</p>
    </div>
</template>
<script>
export default{
    name : 'loginTemp',
    methods : {
        logout(){
            this.$router.push('/')
        }
    }
}
</script>