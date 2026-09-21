import {useState,useEffect} from 'react'
import { type UserReference } from '../types/UserTypes'
import { getUsersAsync } from '../services/UserService'

export const useUsers = () => {

    const [users, setUsers] = useState<UserReference[]>([])
    const [hasError, setHasError]=useState(false)
    useEffect(() =>{
        const getUsers = async () =>{
            try{
                const usersResponse = await getUsersAsync()
                setUsers(usersResponse)
            }
            catch (error){
                console.error(error)
                setHasError(true)
            }
        }
        void getUsers()
    },[])
 
  return {
    users,
    hasError
  }
}
