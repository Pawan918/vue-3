import { createStore } from 'vuex';

const store = createStore({
    state(){
        return {
            data : ['Start Making a Presentation','Pay a rent','Buy a milk'],
        }
    },
    mutations : {
        addData(state,val){
            state.data.push(val)
        },
        deleteData(state,id){
            state.data.splice(id,1);
        }
    }
})

export default store
