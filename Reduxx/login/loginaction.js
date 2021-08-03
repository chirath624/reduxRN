import { SET_USER } from "./logintype"

export const SetUsername=(name)=>{
return{
    type:SET_USER,
    payload:name
}
}