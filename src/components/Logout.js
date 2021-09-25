import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Logout = (props) => {
  const handleLogout = () => {
    sessionStorage.removeItem('user');
    props.setUser();
  }

  return (
    <Typography color="white">
      Welcome <span style={{fontWeight: 'bold'}}>{props.user.email}</span> | <Button variant="text" onClick={handleLogout}>Log Out</Button>
    </Typography>
  );
}

export default Logout;