import axios from "axios";
import { createStore } from "vuex";

const store = createStore({
    state(){
        return {
            data : [],
        }
    },
    actions : {
        async login(){
            try{
                const res = await axios.post('https://reqres.in/api/{resource}?page=1&per_page=10')
                console.log(res);
            }catch(err){
                console.log('err')
            }
        }
    }
})

export default store