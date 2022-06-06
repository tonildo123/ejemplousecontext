import React, {useContext, useEffect} from 'react';
import UserContext from '../context/User/UserContext';

const Profile = () => {

  const {selectedUser } = useContext(UserContext); // ya puedo acceder a todo lo que maneja UserContext
    
  return (
    <>
      { (selectedUser)
      ?(<div>
          <img src={selectedUser.avatar}/>
          <h2>datos</h2>
          <h3>Nombre - {selectedUser.first_name}</h3>
          <h3>email - {selectedUser.email}</h3>
          <h3></h3>
        </div>) 
      :(<h1>Sin selected</h1>)}
  </>
  )
}

export default Profile