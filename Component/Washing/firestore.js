import React from 'react'
import { connect } from "react-redux";
import  {useEffect } from 'react';

import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';


 export function testOrderfire({UserData,fetchUsers}){

   const {Users}=this.props
    return (
        <div>
        {Users.map((UserData) => (
          <div key={UserData.id}>{JSON.stringify(UserData)}</div>
        ))}
      </div>
    )
}
const mapStateToProps=state=>{
    return{
        UserData:state.firestore.ordered.Users
    }
}



export default  compose(connect(mapStateToProps),firestoreConnect([{collection:'Users'}]))(testOrderfire)