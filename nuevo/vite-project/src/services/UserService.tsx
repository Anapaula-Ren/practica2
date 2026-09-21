import { type UserReference } from '../types/UserTypes'

export const getUsersAsync = async (): Promise<UserReference[]> =>{
const response = await fetch('https://jsonplaceholder.typicode.com/users')
            if(!response.ok)
            {
                throw new Error('Error en la ejecucion de la api')
                //console.error('Error en la api')
            }
            const userData:UserReference[] = await response.json()
            return userData
}