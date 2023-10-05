<template>
    <div class="listItem">
        <div class="listItem-status">
            <div class="listItem-radio">
                <!-- <PrettyCheck type="checkbox" color="success" v-model="checked"/> -->
                <input type="checkbox" class="listItem-radio--input" v-model="checked" >
            </div>
        </div>
        <div class="listItem-body">
            <div class='listItems-body'>
                <div :class="[checked?'checkedItem' : '','listItem-text']">
                    <span class="listItem-text--span">
                        <slot></slot>
                    </span>
                </div>
                <div class="listItem-color" >
                    <img src="./../../assets/delete-svgrepo-com.svg" class="delete-icons" @click="deleteClickHandler"/>
                </div>
            </div>
            <div class="listItem-footer">
                <span>
                    &nbsp;
                </span>
            </div>
        </div>
    </div>
</template>
<script>
// import PrettyCheck from 'pretty-checkbox-vue/check';
export default {
    name : 'listItemTemp',
    // components :{
    //     PrettyCheck
    // },
    emits : ['deleteClickHandler'],
    props : ['itemKey'],
    data(){
        return{
            checked:false
        }
    },
    methods : {
        checkboxClickHandler(){

        },
        deleteClickHandler(){
            this.$emit('deleteClickHandler',this.itemKey)
        }
    }
}
</script>
<style>
@media screen and (max-width: 430px) {
    .listItem{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        z-index: 1;
}
.listItem-body{
    /* color: red; */
    display: flex;
    flex-direction: column;
    padding: 0px 12px 0px 16px;
    justify-content:center;
    min-height: 60px;
    gap: 15px;
    width: 100%;
}
.listItems-body{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.listItem-status{

    min-width: 25px;
}
.listItem-color{
    width: 25px;

    display: flex;
    justify-content: center;
    /* justify-content: flex-end; */
    /* flex-grow: 1; */
}
.listItem-footer{
    /* display: flex;
    align-items: flex-end; */
    width: 99%;
    overflow: hidden;
    height: 1px;
    opacity: 0.1px;
    background: #252A31;
}
.listItem-radio{
    display: flex;
    justify-content: center;
    align-items: center;
    /* height: 20px;
    width: 20px; */
}
.listItem-radio--input{
    display: block;
    height: 20px;
    width: 20px;
    outline: none;
    border-radius: 50%;
    accent-color:green;
}

.checkedItem{
    color: green;
    text-decoration:line-through;
}
.delete-icons{
    font-size: 20px;
}
}

</style>

