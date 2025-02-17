// npm install react-hook-form step 1

import * as React from 'react';
import Paper from '@mui/material/Paper';
import './App.css';
import { Box, TextField, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form'; // step2:import useForm ()

// function Item({ children }) {
//   return (
//     <Paper sx={{ padding: 2, textAlign: 'center' }}>
//       <Typography>{children}</Typography>
//     </Paper>
//   );
// }

function App() {
  const {
    register,  // register function is used to register the form inputs to react-hook-form for validation and form state management.
    handleSubmit,
    formState: { errors }, // Extract errors
    watch //  Import watch
  } = useForm();

  // Step 4: Define onSubmit function
  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  // Watching form values for live preview
  const formValues = watch(); 

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}> {/* Step 5: Handle form submission */}
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
            {...register("name", { required: "Name is required" })} // Error message added
          />
          {errors.name && <Typography color="error">{errors.name.message}</Typography>}

          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <Typography color="error">{errors.email.message}</Typography>}

          <TextField
            fullWidth
            label="Phone number"
            variant="outlined"
            margin="normal"
            type='number'
            {...register("phoneNumber", {
               required: "Phone number is required",
               pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid phone number",
              },
            })} 
          />
          {errors.phoneNumber && <Typography color="error">{errors.phoneNumber.message}</Typography>}

          <TextField
            fullWidth
            label="Password"
            variant="outlined"
            margin="normal"
            type='password'
            {...register("password", {  
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })} 
          />
          {errors.password && <Typography color="error">{errors.password.message}</Typography>}

          <Button
            variant="contained"
            color="primary"
            type="submit"
            fullWidth
            sx={{ mt: 2 }}
          >
            Submit
          </Button>

          {/* Live preview of input values */}
          <Box sx={{ mt: 2, p: 2, border: '1px solid #ccc', borderRadius: 1 }}>
            <Typography variant="body1"><strong>Live Preview:</strong></Typography>
            <Typography variant="body2">Name: {formValues.name || ''}</Typography>
            <Typography variant="body2">Email: {formValues.email || ''}</Typography>
            <Typography variant="body2">Phone: {formValues.phoneNumber || ''}</Typography>
            <Typography variant="body2">Password: {formValues.password || ''}</Typography>
          </Box>
        </Box>
      </form>
    </>
  );
}

export default App;
