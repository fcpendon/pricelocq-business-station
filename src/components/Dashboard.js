import React from 'react';
import DashboardBanner from './DashboardBanner';
import ListStations from './ListStations';
import Logout from './Logout';
import Box from '@mui/material/Box';

const Dashboard = (props) => {
  return (
    <div>
      <Box sx={{ display: 'flex', width: 1200, justifyContent: 'space-between', alignItems: 'flex-end', margin: '10px auto' }}>
        <DashboardBanner />
        <Logout user={props.user} setUser={props.setUser} />
      </Box>
      <ListStations user={props.user} />
    </div>
  );
}

export default Dashboard;