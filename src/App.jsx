import * as React from 'react';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import './App.css';
import { Box, TextField, Button, Typography } from '@mui/material';

import { Divider } from '@mui/material';

function Item({ children }) {
  return (
    <Paper sx={{ padding: 2, textAlign: 'center' }}>
      <Typography>{children}</Typography>
    </Paper>
  );
}

function App() {
  return (
    <>
      {/* <Box sx={{ width: 200 }}>
        <Stack
          divider={<Divider orientation="vertical" flexItem />}
          // direction={{ xs: 'column', sm: 'row' }} responsive
          direction="row"
          spacing={{ xs: 1, sm: 2 }}

          //flex gap
          useFlexGap
          sx={{ flexWrap: 'wrap' }}
        >
          <Item>Item 1</Item>
          <Item>Item 2</Item>
          <Item>Long content</Item>
        </Stack>
      </Box> */}
      <Box 
      sx={{
        maxWidth: 400,
        mx: 'auto',
        mt: 5,
        p: 3,
        boxShadow: 3,
        borderRadius: 2,
        backgroundColor: '#fff'
      }}
    >
      <Typography variant="h5" textAlign="center" mb={2} fontWeight="bold" color='primary'>
        Contact Us
      </Typography>

      <TextField 
        fullWidth 
        label="Name" 
        variant="outlined" 
        margin="normal" 
      />

      <TextField 
        fullWidth 
        label="Email" 
        type="email" 
        variant="outlined" 
        margin="normal" 
      />

      <TextField 
        fullWidth 
        label="Phone number" 
        variant="outlined" 
        margin="normal" 
        multiline 
        // rows={4} 
      />

      <Button 
        variant="contained" 
        color="primary" 
        fullWidth 
        sx={{ mt: 2 }}
      >
        Submit
      </Button>
    </Box>
    </>
  );
}

export default App;
