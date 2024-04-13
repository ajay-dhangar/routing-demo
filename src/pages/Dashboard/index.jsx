// Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = ({ match }) => {
  return (
    <div style={{textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh'}}>
      <h2 style={{color: 'blue'}}>User Dashboard</h2>

      <div>
        <h3 style={{color: 'green'}}>Welcome to your dashboard</h3>
        <p style={{color: '#333'}}>Click on the links below to view your profile or settings</p>
      </div>

      <div style={{position: 'absolute', top: '150px', left: '10px'}}>
        <ul style={{listStyle: 'none', display: 'flex', justifyContent: 'space-between', gap: '10px'}}>
          <li>
            <Link to={`/dashboard/profile`}>Profile</Link>
          </li>
          <li>
            <Link to={`/dashboard/settings`}>Settings</Link>
          </li>
        </ul>

       </div>

    </div>
  );
};

export default Dashboard;
