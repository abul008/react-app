import {ADD_INFOMEN,NAV_DISPLAY,MEN_INFO} from "./actionType";

export const addinfomen=(info)=>{
     return{
         type: ADD_INFOMEN,
         payload : info 
     }
}
export const navdisplay=(navdisplay)=>{
    return{
        type: NAV_DISPLAY,
        payload: navdisplay
    }
}
export const meninfo=(meninfo)=>{
    return{
        type:MEN_INFO,
        payload:meninfo
    }
}