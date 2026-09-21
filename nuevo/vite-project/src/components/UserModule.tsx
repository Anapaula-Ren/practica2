import React, {useState, useEffect} from 'react'
import UserProfile from './components/UserProfile'
import {type UseRefrenece, type UserReference} from '../types/UserTypes'


export const UserModule = () => {
    const [users, setUsers] = useState([])
    useEffect{()=> {
        const getUsers = async ()=>{
            const response = await fetch ('https://jsonplaceholder.typicode.com/users')
            if(response.ok){
                console.error('Error en la app')
            }
            const userData: UserReference[]= await response.json{}
        }   setUsers(UserProfile)
    
        void.getUsers()
    
    }, []
    }
  return (
    <div>Usuarios activod</div>
    <br/>
    

  )
}
