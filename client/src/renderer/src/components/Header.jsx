import React from 'react'
import { Link } from 'react-router-dom'

const Header = (props) => {
    
  return (
    <div className="page-head">
            <h1 style={{"text-transform":"capitalize"}} ><Link to={"/"+props.heading}>{props.heading}</Link></h1>
            <p>{props.desc}</p>
    </div>
  )

//<Header heading={"Inventory"} desc={"List of Medicines available for sales."}/>
}

export default Header