import React from "react";


const Dashboard = () => {

    return (
        <div className="main-container">
            <div className="box-container">
                <div className="dashboard-header">
                    <h1>WELCOME<span> ,somwang</span></h1>
                    <div className="profile-pic">
                    </div>

                </div>
                <div className="dashboard-container">
                    <div className="cards">
                        <div className="card">
                            <h3>Access Count</h3>
                            <h1>2 <span>Times</span></h1>
                        </div>
                        <div className="card">
                            <h3>Daily Use</h3>
                            <h1>1 <span>Hour</span> 13 <span>Minutes</span></h1>
                        </div>
                        <div className="card">
                            <h3>Visitor Active</h3>
                            <h1>2</h1>
                        </div>
                    </div>
                    <div className="cards">
                        <div className="card">
                            <h3>User</h3>
                            <div className="graph"></div>
                        </div>
                        <div className="card">
                            <h3>History Timeline</h3>
                            <div className="graph"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Dashboard;