import React from 'react'
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
;('use client')

const DashChart = ({data1,data2,data3,data4,data5,data6,data7,data8}) => {
    // console.log(data1)
  return (
    <ResponsiveContainer width="100%" height="100%">
    <AreaChart className='areachart' width={400} height={200} data={data1}>
      <YAxis />
      <XAxis 
      dataKey="DATE"
      />
      <Legend/>
      <Tooltip/>
      <CartesianGrid strokeDasharray="5 5" />
      <Area
       type="monotone"
       dataKey="total"
       stroke="#0f282f" 
      //  fill="#109cf1"
         />
    </AreaChart>
    </ResponsiveContainer>
  )
}

export default DashChart