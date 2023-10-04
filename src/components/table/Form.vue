<template>
    <div class="form">
        <label for="name">Name : </label>
        <input type="text" v-model="name" name="name" class="name"/>
        <label for="email">email : </label>
        <input type="email" v-model="email" name="email" class="email"/>
        <label for="dob">dob : </label>
        <input type="date" v-model="dob" name="date" class="date"/>
        <label for="password">Password : </label>
        <input type="password" v-model="password" name="password" class="password"/>
        <label for="confirmPassord">confirmPassword : </label>
        <input type="text" v-model="confirmPassword" name="confirmPassword" class="confirmPassword"/>

        <label for="condition">        <input type="checkbox" v-model="condition" name="condition" class="condition"/> Terms and Conditions</label>
        <button @click.prevent="submit" class="submit">Submit</button>

    </div>
</template>
<script>
import { callWithErrorHandling } from 'vue';

export default{
    name : 'formTemp',
    emits:['formSubmit'],
    data(){
        return {
            name : "",
            email : '',
            dob : '',
            password : '',
            confirmPassword : '',
            condition : false,
        }
    },
    methods : {
        submit(){
            if(this.condition){
                // console.log(this.name,this.password,this.email,this.dob,this.confirmPassword);
                this.$emit('formSubmit',{
                    name : this.name,
                    email : this.email,
                    dob : this.dob,
                    password : this.password

                })

            }else{
                console.log('pleas tick the terms and conditions')
            }
        }
    }

}
</script>
<style>
.form {
    display: flex;
    flex-direction: column;
    color: black;
}
label{
    margin-bottom: 5px;
}
input{
    margin-bottom: 10px;
}
.condition{
}
.submit{
    cursor: pointer;
}
</style>