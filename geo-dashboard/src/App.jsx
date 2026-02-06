import React, { useState, useMemo } from 'react';
import { Box, CssBaseline, AppBar, Toolbar, Typography, Paper } from '@mui/material';
import GeoMap from './components/GeoMap';
import DataTable from './components/DataTable';
import { mockData } from './data';

function App() {
  const [selectedId, setSelectedId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Filter logic
  const filteredData = useMemo(() => {
    return mockData.filter(item => 
      item.projectName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <CssBaseline />
      <AppBar position="static" sx={{ bgcolor: '#2c3e50' }}>
        <Toolbar>
          <Typography variant="h6">GeoSpatial Insights Dashboard</Typography>
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex', flex: 1, overflow: 'hidden', p: 2, gap: 2 }}>
        {/* Left Side: Table */}
        <Paper sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2 }}>
          <DataTable 
            data={filteredData} 
            selectedId={selectedId} 
            onRowClick={(id) => setSelectedId(id)}
            onSearch={(val) => setSearchTerm(val)}
          />
        </Paper>

        {/* Right Side: Map */}
        <Paper sx={{ flex: 1.5, position: 'relative' }}>
          <GeoMap 
            data={filteredData} 
            selectedId={selectedId} 
            onMarkerClick={(id) => setSelectedId(id)} 
          />
        </Paper>
      </Box>
    </Box>
  );
}

export default App;