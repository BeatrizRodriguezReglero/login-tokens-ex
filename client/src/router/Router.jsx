import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Register from "../pages/Register"
import Layout from "../layouts/Layout"

const Router=()=>{
    return <Routes>
        <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
        </Route>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
    </Routes>
    
}
export default Router