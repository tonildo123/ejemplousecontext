import React, {useContext, useEffect} from 'react';
import UserContext from '../context/User/UserContext';


const UserList = () => {


    const {users, getAllUsers, getAnUsers } = useContext(UserContext); // ya puedo acceder a todo lo que maneja UserContext

    console.log(users)
    useEffect(() => {
        getAllUsers();            
     }, [])
    


  return (


   <div className='list-group h-100'>

      {
         users.map(users =>(
            <a className="list-group-item list-group-item-action d-flex flex-row justify-content-start" href="#!" key={users.id} onClick={() => {getAnUsers(users.id)}}
            >
               
               <img src={users.avatar} className="img-fluid mr-4 rounded-top" alt={users.first_name} width="70"/>
               <p>{users.first_name}</p>

            </a>
         ))

      }

   </div>



  )
}

export default UserList