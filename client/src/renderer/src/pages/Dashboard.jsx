import React from 'react'

const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className="dashboard-head">
            <h1>Dashboard</h1>
            <p>A quick data overview of inventory.</p>
        </div>
        <div className="overview-container">
            <div className="overview inventory-overview">
                {/* <icon */}
                <h1> Good </h1>
                <h2>Inventory Status</h2>
                <div>
                    <p>veiw detailed report </p>
                </div>
            </div>
            <div className="overview available-overview">
                {/* <icon */}
                <h1> 151 </h1>
                <h2>Available Medicines</h2>
                <div>
                    <p>veiw detailed report </p>
                </div>
            </div>
            <div className='overview shortage-overview'>
                {/* <icon */}
                <h1> 02 </h1>
                <h2>Medicine Shortage</h2>
                <div>
                    <p>veiw detailed report </p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Dashboard