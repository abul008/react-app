import { meninfo } from "./action";
import {ADD_INFOMEN,MEN_INFO,NAV_DISPLAY} from "./actionType";


const initialState = { 
    info: [] , 
    navdislplay: false,
    meninfo: JSON.parse(localStorage.getItem("myId1")),
}

const loginInfoFun =(state=initialState , action )=>{
       
        switch(action.type){
            case ADD_INFOMEN:
                return{
                    ...state,
                    info : [...state.info,action.payload]

                }
            case NAV_DISPLAY:
                return{
                    ...state,
                    navdislplay: action.payload
                }  
            case MEN_INFO:
                return{
                    ...state,
                    meninfo:action.payload
                }    
                default:
                    return state 
        }
      

}

export default loginInfoFun;