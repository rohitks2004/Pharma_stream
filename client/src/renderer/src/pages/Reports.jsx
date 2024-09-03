import React, { useEffect, useMemo, useState } from 'react'
import ReportsAreaChart from '../components/charts/ReportsAreaChart'
import axios from 'axios';

const Reports = () => {
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
    <div>
        <div className="chart-container">
            {/* {
                category.map(category=>{
                    return( */}
                    {/* data1 */}
                    <div className="charts">
                        <h1>{category[0]}</h1>
                        <ReportsAreaChart data={M01ABdata}/>
                    </div>
                    {/* data2 */}
                    <div className="charts">
                        <h1>{category[1]}</h1>
                        <ReportsAreaChart data={M01AEdata}/>
                    </div>
                    {/* data3 */}
                    <div className="charts">
                        <h1>{category[2]}</h1>
                        <ReportsAreaChart data={N02BAdata}/>
                    </div>
                    {/* data4 */}
                    <div className="charts">
                        <h1>{category[3]}</h1>
                        <ReportsAreaChart data={N02BEdata}/>
                    </div>
                    {/* data5 */}
                    <div className="charts">
                        <h1>{category[4]}</h1>
                        <ReportsAreaChart data={N05Bdata}/>
                    </div>
                    {/* data6 */}
                    <div className="charts">
                        <h1>{category[5]}</h1>
                        <ReportsAreaChart data={N05Cdata}/>
                    </div>
                    {/* data7 */}
                    <div className="charts">
                        <h1>{category[6]}</h1>
                        <ReportsAreaChart data={R03data}/>
                    </div>
                    {/* data8 */}
                    <div className="charts">
                        <h1>{category[7]}</h1>
                        <ReportsAreaChart data={R06data}/>
                    </div>
                    {/* )
                })
            } */}
            
        </div>
    </div>
  )
}

export default Reports