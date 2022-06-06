import React, {useReducer} from 'react';
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import axios from 'axios';

const UserState = (props) => {
  
    const initialState = {
        users :[],
        selectedUser:null, 
    } // estado inicial 

    // usamos un useReducer 
    const [state, dispatch] = useReducer(UserReducer, initialState);


    // funciones
    // funciones que trae a todos los usuarios 

    const getAllUsers = async() =>{
        // usaremos axios para consumir apis

        const resp = await axios.get('https://reqres.in/api/users/');
        dispatch({

            type:'GET_ALL_USERS',
            payload:resp.data.data
        });

    }


    // funciones que trae un usuarios/ profile
    const getAnUsers = async(id) =>{

        
        const resp = await axios.get('https://reqres.in/api/users/'+id);
        console.log(resp.data.data)
        dispatch({

            type:'GET_AN_USER',
            payload:resp.data.data
        });

    }

    return(
        <UserContext.Provider value={{
                // aqui defino los valores que podran ser usados del componente
                users: state.users, 
                selectedUser: state.selectedUser,
                getAllUsers,
                getAnUsers,

        }}>
            {
              // de esta forma todos los comonentes que esten declarados en este archivo podran
              // hacer uso de initialState
                
                props.children

            }
        </UserContext.Provider>
    )

}


export default UserState


/////////////////
// A diferecncia del usestate el useReducer usa un dispatch en lugar de set setState 
// el dispatch toma una funcion como parametro, eso se diferencia de useState que es una funcion que 
// setea el estado 
// el dispatch setea tambien pero con diferentes eventos o funciones