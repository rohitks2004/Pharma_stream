import React, { useEffect, useMemo, useState } from 'react'
import moment from "moment";
const HeadBar = () => {
    const [currentDateTime, setCurrentDateTime] = useState(moment());
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentDateTime(moment());
      }, 1000);
  
      return () => clearInterval(timer); 
    }, []);
  return (
    <div className='head'>
        {/* <h1>My App</h1> */}
        <h2>{`${currentDateTime.format('DD MMMM, YYYY')} ${currentDateTime.format("hh:mm:ss A")}`}</h2>
    </div>
  )
}

export default HeadBar;