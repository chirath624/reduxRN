
import { SET_USER } from "./logintype"

export const initialState={
   username:''

}

const loginreducer=(state=initialState,action)=>{
    switch(action.type){
        case SET_USER:return{
            
            username:action.payload
        }
        default:return state
    }


}

export default loginreducer