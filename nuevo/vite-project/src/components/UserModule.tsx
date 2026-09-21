 
// import {useState,useEffect} from 'react'
import { useUsers } from '../hooks/useUsers'
import UserProfile from './UserProfile'
// import { type UserReference } from '../types/UserTypes'
 
export const UserModule = () => {
    const { users, hasError } = useUsers()
 
    return (
        <div>
            {hasError ? (<h1>Error inesperado</h1>)
            :
            (
                <>
                    <div>
                        Usuarios Activos
                        <br />
                        {users.map((user) => (
                            <UserProfile key={user.id} user={user} />
                        ))}
                    </div>
                </>
            )}
        </div>
    )
}
 
 