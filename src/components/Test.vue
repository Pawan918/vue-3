<template>
    <form>
        <span class="margin">
            <label :for="'firstName'">FirstName : </label>
            <input id="firstName" v-model="firstName" />
        </span>
        <span class="margin">

            <label for="lastName">lastName : </label>
            <input id="lastName" v-model="lastName" />
        </span>
        <span class="margin">
            <label for="address">Address : </label>
            <input id="address" v-model="address" />
        </span>
        <button @click.prevent="submit">Submit</button>
    </form>
    <table>
        <tr v-for="(data,index) in data" :key="index" :class="{red : data.check}">
            <td>{{ data.firstName }}</td>
            <td>{{ data.lastName }}</td>
            <td>{{ data.address }}</td>
            <button @click="deleteHandler(index)">Delete</button>
            <input type="checkbox"  @click="()=>{data.check = !data.check}"/>
        </tr>
    </table>
</template>
<script >
export default {
    name: 'TestComp',
    data() {
        return {
            name: '',
            data: [],
            firstName: '',
            lastName: '',
            address: '',
        }
    },
    methods: {
        submit(e) {
            if (e.type === 'click') {
                if (this.firstName === "" && this.lastName === "" && this.address === "") {
                    alert('Please enter your Input first')
                } else {
                    let inpt = {
                        firstName: this.firstName,
                        lastName: this.lastName,
                        address: this.address,
                        check : false,
                    }

                    this.data.push(inpt);
                }
                this.firstName = '';
                this.lastName = '';
                this.address = ''
            }
        },
        deleteHandler(index) {
            this.data.splice(index, 1);
        },
        editHandler(index) {
            // this.data[index]
            this.editIndex = index;
            this.name = this.data[index];
        }
    },
}
</script>
<style>
.red{
    color: red;
}
.margin {
    margin: 0px 15px;
}
table{
    margin-top: 20px;
    width: 800px;
    border-collapse: collapse;
}
td{
    border: 2px solid black;
    text-align: left;
    padding: 5px 20px;
}
</style>