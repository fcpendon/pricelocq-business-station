import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Logout = (props) => {
  function Logout() {
    sessionStorage.removeItem("user");
    props.setUser();
  }

  return (
    <Typography color="white">
      Welcome <span style={{fontWeight: 'bold'}}>{props.user.email}</span> | <Button variant="text" onClick={Logout}>Log Out</Button>
    </Typography>
  );
}

export default Logout;