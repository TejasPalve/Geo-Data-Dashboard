import React from 'react';
import { Box, AppBar, Toolbar, Typography, Container } from '@mui/material';

const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <AppBar position="static" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Geo-Spatial Project Tracker
          </Typography>
          <Typography variant="body2">
            Items: 5,000 Total
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Box component="main" sx={{ flexGrow: 1, p: 2, overflow: 'hidden' }}>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;