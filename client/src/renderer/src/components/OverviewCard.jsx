import React from 'react'

const OverviewCard = ({overview}) => {
  const  {className,parameter,status,detail,icon} = overview;
  return (
        <div className={"overview "+className}>
                {/* <icon */}
                <h1> {status} </h1>
                <h2>{parameter}</h2>
                <div>
                    <p>{detail}</p>
                </div>
            </div>
  )
}

export default OverviewCard