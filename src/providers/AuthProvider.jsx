/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react"
import { onAuthStateChanged, signOut } from "firebase/auth"
import {auth} from '../firebase/firebase'

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)

    const logOut = () => {
      setUser(null)
      setLoading(true)
      localStorage.removeItem('token')
      return signOut(auth)
    }

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, currentUser => {
        setLoading(true)
        setUser({
          name: currentUser?.displayName,
          email: currentUser?.email,
          uid: currentUser?.uid,
          photoUrl: currentUser?.photoURL,
        })
        if(!currentUser){
          localStorage.removeItem('token')
        }
        setLoading(false)
      })

      return () => {
        return unsubscribe()
      }
    },[user])

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
        logOut
    }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider