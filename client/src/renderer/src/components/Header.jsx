import React from 'react'

const Header = (props) => {
    
  return (
    <div className="page-head">
            <h1>{props.heading}</h1>
            <p>{props.desc}</p>
    </div>
  )

//<Header heading={"Inventory"} desc={"List of Medicines available for sales."}/>
}

export default Header