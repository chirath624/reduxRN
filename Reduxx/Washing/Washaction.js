import axios from "axios"
import firestore from "../../Component/Washing/firestore"
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./washtype"

export const fetchUsersReqest=()=>{
    return{
        type:FETCH_USERS_REQUEST
    }
}
export const fetchUsersSuccess= listData=>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:listData
    }
}
export const fetchUsersFailure=error=>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}
export const fetchUsers= ({userId}) => {

    let [listData, setListData] = useState([]);
    useEffect((dispatch) => {
      firestore()
        .collection('Users')
        .get()
        .then((querySnapshot) => {
        
          let temp = [];
          console.log('Total users: ', querySnapshot.size);
          querySnapshot.forEach((documentSnapshot) => {
            console.log('user Id: ', documentSnapshot.id);
            let userDetails = {};
            // Document fields
            userDetails = documentSnapshot.data();
            // All the document related data
            userDetails['id'] = documentSnapshot.id;
            temp.push(userDetails);
            setListData(temp);
            dispatch(fetchUsersSuccess(listData))
          });
        });
    }, []);
}