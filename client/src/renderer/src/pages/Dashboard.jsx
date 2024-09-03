import React, { useEffect, useState } from 'react'
import OverviewCard from '../components/OverviewCard'
import Header from '../components/Header'
import DashChart from '../components/charts/DashChart'
import axios from 'axios'

const Dashboard = () => {
    const [M01ABdata , setM01ABData] = useState([]);
    const [M01AEdata , setM01AEData] = useState([]);
    const [N02BAdata , setN02BAData] = useState([]);
    const [N02BEdata , setN02BEData] = useState([]);
    const [N05Bdata , setN05BData] = useState([]);
    const [N05Cdata , setN05CData] = useState([]);
    const [R03data , setR03Data] = useState([]);
    const [R06data , setR06Data] = useState([]);
    const category = [
    "M01AB",
    "M01AE",
    "N02BA",
    "N02BE",
    "N05B",
    "N05C",
    "R03",
    "R06"
    ];
    const fetchData = async()=>{
        try{
            const response1 = await axios.get("http://localhost:8800/api/cat/M01AB");
            const data1 = await response1.data;
            setM01ABData(data1)
            const response2 = await axios.get("http://localhost:8800/api/cat/M01AE");
            const data2 = await response2.data;
            setM01AEData(data2)
            const response3 = await axios.get("http://localhost:8800/api/cat/N02BA");
            const data3 = await response3.data;
            setN02BAData(data3)
            const response4 = await axios.get("http://localhost:8800/api/cat/N02BE");
            const data4 = await response4.data;
            setN02BEData(data4)
            const response5 = await axios.get("http://localhost:8800/api/cat/N05B");
            const data5 = await response5.data;
            setN05CData(data5)
            const response6 = await axios.get("http://localhost:8800/api/cat/N05C");
            const data6 = await response6.data;
            setR03Data(data6)
            const response7 = await axios.get("http://localhost:8800/api/cat/R03");
            const data7 = await response7.data;
            setR06Data(data7)
            const response8 = await axios.get("http://localhost:8800/api/cat/N05B");
            const data8 = await response8.data;
            setN05BData(data8)
        }catch(e){
            console.log(e)
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
  return (
    <div className='dashboard'>
        <div className="dash-chart-container">
            <DashChart 
            data1={M01ABdata }
            data2={   M01AEdata }
            data3={  N02BAdata }
            data4={  N02BEdata }
            data5={  N05Bdata }
            data6={ N05Cdata}
            data7={ R03data}
            data8={ R06data}
            />
        </div>
    </div>
  )
}

export default Dashboard