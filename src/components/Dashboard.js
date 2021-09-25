import React from 'react';
import ListStations from './ListStations';
import Logout from './Logout';

const Dashboard = (props) => {
  return (
    <div>
      <Logout user={props.user} setUser={props.setUser} />
      <ListStations user={props.user} />
    </div>
  );
}

export default Dashboard;