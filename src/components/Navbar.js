import React from 'react'
import {Link,useNavigate} from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate()
    // const logoutFunc = ()=>{
    //     props.handleLogout()
    //     navigate("/login")
    //   }
      return (
        <div>
            <Link to ="/">Home</Link>
            <Link to ="/Profile">Profile</Link>

        </div>
    )
}