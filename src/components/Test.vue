<template>
    <div class="">
        <FormSort @sortHandler="sortHandler"></FormSort>
        <button class="form-show" @click="formHandler">Form Show</button>
        <Modal v-model:visible="isFormVisible">
            <Form @formSubmit="formSubmit"></Form>
        </Modal>
        <ShowTable 
            :data="data" 
            @formDeleteHandle="formDeleteHandle" 
            @formEditHandle="formEditHandle"
        >
        </ShowTable>

    </div>
</template>
<script >
import Form from './table/Form.vue'
import FormSort from './table/FormSort.vue'
import { Modal } from 'usemodal-vue3'
import ShowTable from './table/ShowTable.vue'
export default {
    name: "testTemp",
    data() {
        return {
            isFormVisible: false,
            data: [{
                name : 'Pawan Kumar',
                email : 'pawanshah844@gmail.com',
                dob : '2000-04-16',
                password : 'test',
            }],
            edit: false,
            index: -1,
        }
    },
    components: {
        Form,
        Modal,
        ShowTable,
        FormSort
    },
    methods: {
        formHandler() {
            this.isFormVisible = !this.isFormVisible;
        },
        formSubmit(val) {
            this.isFormVisible = false;
            if (this.edit) {
                this.data[this.index] = val;
                this.edit = false;
                this.index = -1;
            } else {
                this.data.push(val);
            }
        },
        formDeleteHandle(index) {
            this.data.splice(index, 1);
        },
        formEditHandle(index) {
            this.edit = true;
            this.index = index;
            this.formHandler();
        },
        sortHandler(val){
            if(val === ''){
                alert('please select options')
            }else if( val === 'name'){
                this.data.sort(this.comp);
                console.log(`sort is handled on ${val}`)
            }else{
                this.data.sort(function(a,b){
                    return new Date(b.dob) - new Date(a.dob);
                })
            }
        },
        comp(a,b){
            if( a.name < b.name) return 1;
            if(a.name > b.name ) return -1;
            return 0;
        }
    }
}

</script>
<style></style>