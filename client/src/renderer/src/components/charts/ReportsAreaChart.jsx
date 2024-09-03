import React from 'react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
;('use client')



const ReportsAreaChart = ({data}) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
    <BarChart className='areachart' width={400} height={200} data={data}>
      <YAxis />
      <XAxis 
      dataKey="DATE"
      />
      <Legend/>
      <Tooltip/>
      <CartesianGrid strokeDasharray="5 5" />
      <Bar
       type="monotone"
       dataKey="total"
      //  stroke="#0f282f" 
       fill="#109cf1"
         />
    </BarChart>
    </ResponsiveContainer>
  )
}

export default ReportsAreaChart
