import { FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE } from './washtype'

export const initialState={
    loading:false,
    listData:[],
    error:''
}

const Washreducer =(state=initialState,action)=>{
    switch(action.type)
{
    case FETCH_USERS_REQUEST:
        return{
            ...state,
            loading:true
        }
        case FETCH_USERS_SUCCESS:
        return{
            loading:false,
            listData:action.payload,
            error:''
        }
        case FETCH_USERS_FAILURE:
        return{
            loading:false,
            listData:[],
            loading:action.payload
        }
        default:return state

}}
export default Washreducer