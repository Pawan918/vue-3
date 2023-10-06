<template>
    <div class="home">
        <div class="home-text">
            <h1>Home</h1>
            <h1 class="" >Login</h1>
        </div>

        <form @submit.prevent="submit" class="form">
            <h1>LOGIN PAGE</h1>
            <div class="form-name">
                <label for="name">Name:</label>
                <input type="text" v-model="name" name="name">
            </div>
            <div class="form-password">
                <label for="password">password:</label>
                <input type="password" v-model="password" name="password">
            </div>
            <button type="submit" class="btn-submit btn" >Submit</button>
        </form>
    </div>
</template>
<script>
export default {
    name : "homeTemp",
    data (){
        return {

            name : '',
            password : '',
        }
    },
    methods : {
        submit(){
            if(this.name === '' || this.password === ''){
                alert('Please enter Username and Password to login')
            }else{
                this.$router.push('/login')
    
            }
            this.name = '',
            this.password = ''
        }
    }
}
</script>
<style>
.home{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    /* width: 500px; */
}
.btn{
    max-width: 80px;
    padding: 5px;
    background-color: aqua;
    border: none;
}
.form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 500px;
    gap: 20px;
}
.form-name{
    display: flex;
    justify-content: center;
    width: 100%;
}
.form-password{
    display: flex;
    justify-content: center;
    width: 100%;
}
label{
    width: 80px;
    /* color: black; */
}
.home-text{
    width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

</style>