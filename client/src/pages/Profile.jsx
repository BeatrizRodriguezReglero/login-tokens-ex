import { useContext } from "react"
import { AuthContext } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import Logout from "../components/logout/Logout"

const Profile=()=>{
    const{userData}=useContext(AuthContext)

    const navigate =useNavigate()

    return(
        <>
        <h1>{userData.username}</h1>
        <span>{userData.email}</span>
        <button onClick={()=>navigate('/')}> Go Back</button>
        <Logout/>
        </>
    )
}
export default Profile