import React from 'react'
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
;('use client')



const ReportsAreaChart = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <AreaChart width={400} height={300} data={data}>
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

export default ReportsAreaChart
