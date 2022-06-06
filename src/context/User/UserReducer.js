import {GET_ALL_USERS, GET_AN_USER} from '../Type';


const UserReducer = (state, action) => {


  const {payload, type}= action;



  switch (type) {
    case GET_ALL_USERS:
      return {
        ...state,
        users:payload,
      }      
      
    case GET_AN_USER:
      return {
        ...state,
        selectedUser:payload,
      }      
      
    default:
      return state;
  }
  
}

export default UserReducer;