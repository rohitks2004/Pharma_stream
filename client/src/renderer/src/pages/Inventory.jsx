import React, { useState } from 'react'
import OverviewCard from '../components/OverviewCard'
import Header from '../components/Header'
import SearchBar from '../components/SearchBar'

const Inventory = () => {
    const overviewData = [
        {className:"inventory-overview",icon:"",parameter:"Inventory Status",status:"Good",detail:"Veiw Detailed Report "},
        {className:"available-overview",icon:"",parameter:"Available Medicines",status:151,detail:"Visit Inventory"},
        {className:"shortage-overview",icon:"",parameter:"Medicine Shortage",status:2,detail:"Resolve Now"}
    ]

    const all_medicines=[
        {
        "_id": {
          "$oid": "66ceb1391ec34240651046b5"
        },
        "medicineId": "2",
        "name": "Sildenafil 50mg",
        "arrivalDate": {
          "$date": "2024-08-01T00:00:00.000Z"
        },
        "expiryDate": {
          "$date": "2025-08-01T00:00:00.000Z"
        },
        "dealerId": {
          "$oid": "64f1e8e4d1b1c23b5f7f6a34"
        },
        "cost": 18.02,
        "quantity": 379,
        "criticalValue": 35,
        "__v": 0
      },
      {
        "_id": {
          "$oid": "66ceb1e91ec34240651046b8"
        },
        "medicineId": "1",
        "name": "Blood Pressure Med",
        "arrivalDate": {
          "$date": "2024-08-01T00:00:00.000Z"
        },
        "expiryDate": {
          "$date": "2025-08-01T00:00:00.000Z"
        },
        "dealerId": {
          "$oid": "64f1e8e4d1b1c23b5f7f6a34"
        },
        "cost": 23.99,
        "quantity": 172,
        "criticalValue": 50,
        "__v": 0
      }];
      const [medicines,setMedicines] = useState(all_medicines);
  return (
    <div className='inventory'>
        <Header heading={"Inventory"} desc={"List of Medicines available for sales."}/>
        <SearchBar totalItems={all_medicines} setItems={setMedicines}/>
        <button className='add-item'>+ Add item</button>
        <div className="inventory-table">
        {
             <table>
             <thead>
               <tr>
                 <th>Medicine Name</th>
                 <th>Medicine ID</th>
                 <th>Stock in Qty</th>
                 <th>Cost</th>
                 <th>Action</th>
               </tr>
             </thead>
             <tbody>
               {medicines.map((medicine, index) => (
                 <tr key={index}>
                   <td>{medicine.name}</td>
                   <td>{medicine.medicineId}</td>
                   <td>{medicine.quantity}</td>
                   <td>{medicine.cost}</td>
                   <td><button className="detail-button">View Full Detail</button></td>
                 </tr>
               ))}
             </tbody>
           </table>
        }
        </div>
        {/* <div className="overview-container">
            {
                overviewData.map((overview,key)=>{
                    return <OverviewCard overview={overview} key={key}/>
                })
            }
        </div> */}
    </div>
  )
}

export default Inventory