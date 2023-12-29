import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div style={{display:"flex", justifyContent:"space-between",backgroundColor:"black",color:"white",height:"80px",alignItems:"center"}}>
        
        <div>
        <Link  to={"/"} style={{textDecoration:"none",color:"white"}}>
            <ul style={{display:"flex", listStyleType:"none",marginLeft:"20px"}}>
                <li style={{cursor:"pointer",textDecoration:"none"}}><h1>Kalvium❤️</h1></li>
            </ul>
        </Link>
        
        </div>
        <div>
            <ul style={{display:"flex", listStyleType:"none", width:"430px",justifyContent:"space-evenly"}}>
                <Link to={"/About"} style={{textDecoration:"none",color:"white"}}>
                <li>
                    <h1 style={{cursor:"pointer",textDecoration:"none"}}>About</h1>
                </li>
                </Link>
                <Link to={'/Contact'} style={{textDecoration:"none",color:"white"}}>
                <li style={{cursor:"pointer",textDecoration:"none"}}><h1>Contact</h1></li>
                </Link>
                <Link to={'/Forms'} style={{textDecoration:"none",color:"white"}}>
                <li style={{cursor:"pointer",textDecoration:"none"}}><h1>Form Submission</h1></li>
                </Link>
            </ul>
        </div>
    </div>
  )
}

export default Navbar