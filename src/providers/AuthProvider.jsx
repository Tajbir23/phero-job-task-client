/* eslint-disable react/prop-types */
import { createContext, useState } from "react"

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState()

    const authInfo = {
        user,
        setUser,
        loading,
        setLoading
    }
  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider