import React from 'react';
import Logo from './Logo';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const DashboardBanner = () => {
  return (
    <Box style={{ display: 'flex' }}>
      <Logo style={{ height: '40px' }} />
      <Typography variant="h4" ml={1} className="banner-text">
        for Business Stations
      </Typography>
    </Box>
  )
}

export default DashboardBanner;