import { createStore } from "vuex";

const store = createStore({
    state(){
        return{
            data : [
                {name : 'pawan',password : '1234'},
                {name : 'raman', password : '1234'}
            ]
        }
    },
    getters : {
        login : (state)=>(name,password)=>{
            const data = state.data.find((data)=>data.name === name);
            if(data && data.password === password) return true
            return false
            
        }
    }
})

export default store;