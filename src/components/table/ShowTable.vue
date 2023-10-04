<template>
    <div class="table">
        <table v-for="(data,index) in data " :key="index">
            <tr>
                <td>{{ data.name }}</td>
                <td>{{ data.email}}</td>
                <td>{{ data.password }}</td>
                <td>{{ data.dob }}</td>
            </tr>
            <button @click="formDelete(index)">Delete</button>
            <button @click="formEdit(index)">Edit</button>
        </table>
    </div>
</template>

<script>
export default {
    name : 'showTableTemp',
    emits: ['formDeleteHandle','formEditHandle'],
    data (){
        return {
            // data:this.data,
        }
    },
    props:['data'],
    methods : {
        formDelete(index){
            this.$emit('formDeleteHandle',index)
        },
        formEdit(index){
            this.$emit('formEditHandle',index)
        }
    }
}
</script>

<style>
.table{
    margin-top: 20px 0px;
}
button{
    margin-bottom: 20px;
}
table{
    width: 1000px;
    /* border: 1px solid black; */
    border-collapse: collapse;
}
td{
    border: 2px solid black;
    padding: 10px;
    text-align: left;
}
</style>