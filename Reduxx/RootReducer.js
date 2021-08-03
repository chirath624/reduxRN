import { combineReducers } from "redux";
import loginreducer from "./login/loginreducer";
import Washreducer from "./Washing/Washreducer";
const rootReducer=combineReducers({
  
    login:loginreducer,
    wash:Washreducer
})

export default  rootReducer