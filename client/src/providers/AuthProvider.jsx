import { useEffect, useState } from "react"
import { AuthContext } from "../contexts/AuthContext"
import Cookies from "js-cookie"
import { verifyToken } from "../utils/auth/auth.api"
const AuthProvider = ({children})=>{
    const [userData, setUserData]=useState(null)
    const [loading,setLoading]= useState(true)

    console.log(userData)
    
    useEffect(()=>{
        checkLogin(setLoading)
    },[])

    return <AuthContext.Provider value={{ userData, setUserData, loading}}>{children}</AuthContext.Provider>
}

const checkLogin =async (setLoading,setUserData)=>{
    const cookies = Cookies.get()
    if(!cookies.token){
        setLoading(false)
        return
    }

    try {
        const data = await verifyToken()
        if(!data){
            setLoading(false)
            return
        }
        setUserData(data)
        setLoading(false)

    } catch (error) {
        
    }
    
}


export default AuthProvider