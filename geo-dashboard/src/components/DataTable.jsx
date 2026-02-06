import React from 'react';
import { Box, TextField, Typography, Paper } from '@mui/material';

const DataTable = ({ data, selectedId, onRowClick, onSearch }) => {
  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      
      <Box sx={{ mb: 2 }}>
        <TextField
          fullWidth
          size="small"
          label="Filter Projects..."
          variant="outlined"
          onChange={(e) => onSearch(e.target.value)}
        />
      </Box>

      
      <Box sx={{ 
        display: 'flex', 
        bgcolor: '#f5f5f5', 
        p: 1.5, 
        borderBottom: '2px solid #ddd',
        borderRadius: '4px 4px 0 0'
      }}>
        <Typography variant="caption" sx={{ flex: 2, fontWeight: 'bold' }}>PROJECT NAME</Typography>
        <Typography variant="caption" sx={{ flex: 1, fontWeight: 'bold' }}>STATUS</Typography>
        <Typography variant="caption" sx={{ flex: 1, fontWeight: 'bold', textAlign: 'right' }}>LAT</Typography>
      </Box>

      
      <Box sx={{ 
        flex: 1, 
        overflowY: 'auto', 
        maxHeight: 'calc(100vh - 200px)',
        border: '1px solid #eee'
      }}>
        {data.map((item) => (
          <Box
            key={item.id}
            onClick={() => onRowClick(item.id)}
            sx={{
              display: 'flex',
              alignItems: 'center',
              p: 1.5,
              cursor: 'pointer',
              borderBottom: '1px solid #f0f0f0',
              backgroundColor: selectedId === item.id ? '#e3f2fd' : 'transparent',
              '&:hover': { bgcolor: '#f9f9f9' },
              
              contentVisibility: 'auto',
              containIntrinsicSize: '0 45px' 
            }}
          >
            <Typography variant="body2" sx={{ flex: 2, fontWeight: selectedId === item.id ? 600 : 400 }} noWrap>
              {item.projectName}
            </Typography>
            <Typography variant="caption" sx={{ flex: 1, color: 'text.secondary' }}>
              {item.status}
            </Typography>
            <Typography variant="caption" sx={{ flex: 1, textAlign: 'right' }}>
              {item.lat.toFixed(2)}
            </Typography>
          </Box>
        ))}
      </Box>
      
      
      <Box sx={{ p: 1, textAlign: 'right', borderTop: '1px solid #eee' }}>
        <Typography variant="caption" color="text.secondary">
          Showing {data.length} records
        </Typography>
      </Box>
    </Box>
  );
};

export default DataTable;