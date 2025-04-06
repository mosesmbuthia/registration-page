import React from 'react';
import {
    Box,
    Grid,
    Typography,
    TextField,
    Button,
    IconButton,
    Paper,
} from '@mui/material';
import { Facebook, Google, LinkedIn } from '@mui/icons-material';
import App from './App';

const RegistrationPage: React.FC = () => {
    return (
        <Grid container sx={{ height: '100vh' }}>
            {/* Left Side - Welcome Back */}
            <Grid
                item
                xs={12}
                md={6}
                sx={{
                    background: 'linear-gradient(to bottom right, #20c997, #0cbaba)',
                    color: '#fff',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    p: 4,
                }}
            >
                <Typography variant="h4" fontWeight="bold" gutterBottom>
                    Welcome Back!
                </Typography>
                <Typography sx={{ mb: 3 }}>
                    To keep connected with us please login with your personal info
                </Typography>
                <Button variant="outlined" sx={{ color: '#fff', borderColor: '#fff' }}>
                    SIGN IN
                </Button>
            </Grid>

            {/* Right Side - Create Account */}
            <Grid
                item
                xs={12}
                md={6}
                component={Paper}
                elevation={3}
                square
                sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 4 }}
            >
                <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
                    Create Account
                </Typography>

                {/* Social Icons */}
                <Box display="flex" justifyContent="center" gap={2} my={2}>
                    <IconButton aria-label="Sign up with Facebook">
                        <Facebook />
                    </IconButton>
                    <IconButton aria-label="Sign up with Google">
                        <Google />
                    </IconButton>
                    <IconButton aria-label="Sign up with LinkedIn">
                        <LinkedIn />
                    </IconButton>
                </Box>

                <Typography align="center" sx={{ mb: 2 }}>
                    or use your email for registration:
                </Typography>

                {/* Registration Form */}
                <Box component="form" noValidate autoComplete="off">
                    <TextField fullWidth label="Name" margin="normal" required />
                    <TextField fullWidth label="Email" type="email" margin="normal" required />
                    <TextField fullWidth label="Password" type="password" margin="normal" required />
                    <Button
                        fullWidth
                        variant="contained"
                        sx={{
                            mt: 3,
                            background: 'linear-gradient(to right, #20c997, #0cbaba)',
                        }}
                    >
                        SIGN UP
                    </Button>
                </Box>
            </Grid>
        </Grid>
    );
};

export default App;
