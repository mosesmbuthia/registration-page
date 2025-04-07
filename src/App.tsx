import { Typography, Button, TextField, Box, IconButton, Paper } from '@mui/material';
import { Grid } from '@mui/material';


import { Facebook, Google, LinkedIn } from '@mui/icons-material';
import './App.css';

function App() {
  return (
    <Grid container sx={{ height: '100vh' }}>
      <Grid sx={{
          backgroundImage: 'linear-gradient(to bottom right,rgb(6, 6, 6),rgb(243, 67, 67))',
          color: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          p: 4,
        }} >
       
      
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          Welcome Back To Teach2Give! <br />Individual Family Community
        </Typography>

        <Typography sx={{ mb: 3 }}>
          To keep connected with us please login with your personal info
        </Typography>

        <Button variant="contained" sx={{ color: '#fff', borderColor: '#fff' }}>
          SIGN IN
        </Button>
      </Grid>

      <Grid component={Paper}
        elevation={3}
        square
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          p: 4,
        }} >
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Create Account
        </Typography>

        <Typography variant="h6" align="center">
          Sign up with
        </Typography>

        <Box display="flex" justifyContent="center" gap={2} my={2}>
          <IconButton>
            <Google />
          </IconButton>
          <IconButton>
            <LinkedIn />
          </IconButton>
          <IconButton>
            <Facebook />
          </IconButton>
        </Box>

        <Typography align="center" sx={{ mb: 2 }}>
          or use your email for registration:
        </Typography>

        <Box sx={{justifyContent:'center', alignItems:'center' }} component="form" noValidate autoComplete="off">
          <TextField sx={{ width: '75%' }} label="Name" margin="normal" required />
          <TextField sx={{ width: '75%' }} label="Email" type="email" margin="normal" required />
          <TextField sx={{ width: '75%' }} label="Password" type="password" margin="normal" required />
          {/* <TextField sx={{ width: '75%' }} label="Password" type="password" margin="normal" required /> */}

          <Button
            fullWidth
            variant="contained"
            sx={{
              mt: 4,
              backgroundImage: 'linear-gradient(to right, #20c997, #0cbaba)',
              color: '#fff',
            }}
          >
            SIGN UP
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;