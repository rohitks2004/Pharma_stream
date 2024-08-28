import React from 'react'
import OverviewCard from '../components/OverviewCard'
import Header from '../components/Header'

const Dashboard = () => {
    const overviewData = [
        {className:"inventory-overview",icon:"",parameter:"Inventory Status",status:"Good",detail:"Veiw Detailed Report "},
        {className:"available-overview",icon:"",parameter:"Available Medicines",status:151,detail:"Visit Inventory"},
        {className:"shortage-overview",icon:"",parameter:"Medicine Shortage",status:2,detail:"Resolve Now"}
    ]
  return (
    <div className='dashboard'>
        <Header heading={"Dashboard"} desc={"A quick data overview of inventory."}/>
        <div className="overview-container">
            {
                overviewData.map((overview,key)=>{
                    return <OverviewCard overview={overview} key={key}/>
                })
            }
        </div>
    </div>
  )
}

export default Dashboard