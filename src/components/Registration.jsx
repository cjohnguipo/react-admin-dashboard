import * as React from 'react';
import { Container, Grid, Paper, TextField, Button, OutlinedInput, InputAdornment, IconButton, Divider, Alert, FormControl, InputLabel  } from "@mui/material";
 
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { NavLink } from 'react-router-dom';
import { Box } from '@mui/system';

const Registration = () => {

    const [showPassword, setShowPassword] = React.useState(false);
    const [showPasswordConfirm, setShowPasswordConfirm] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowPasswordConfirm = () => setShowPasswordConfirm((show) => !show);
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };
    const handleMouseDownPasswordConfirm = (event) => {
        event.preventDefault();
      };

    const [error, setError] = React.useState({
        status: false,
        msg: "",
        type: "error"
    });    

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const actualData = {
            email: formData.get('email'),
            password: formData.get('password'),
            cpassword: formData.get('password-confirm')
        }
        if(actualData.email && actualData.password) {
            // console.log(actualData);
            document.getElementById('registration-form').reset();
            setError({status: false, msg: 'Register Success', type: 'success'})
        } else {
            setError({status: true, msg: 'All fields are required!', type: 'error'})
        }
    }

    return (
        <Box component='form' noValidate sx={{ mt:1 }} id="registration-form" onSubmit={handleSubmit}>
            <Container maxWidth="sm" >

                <Grid container spacing={2} direction ="column" justifyContent="center" style={{ minHeight: "80vh" }}>
                
                    <Grid container spacing={2} direction ="row" justifyContent="center"  >
                        <h2>Registration Form</h2> 
                    </Grid>

                    <Divider light /> 
                    <Paper elevation={2} sx={{ padding: 5 }}>
                        <Grid container spacing={2} direction ="column">
                            <Grid item>
                            <TextField id="fullname" 
                                        name="fullname" 
                                        type="text" 
                                        fullWidth 
                                        label="Enter your Name" 
                                        placeholder="Full Name" 
                                        variant="outlined" />
                            </Grid>     
                            <Grid item>
                            <TextField id="email" 
                                    name="email" 
                                    type="email" 
                                    fullWidth 
                                    label="Enter your Email" 
                                    placeholder="Email Address" 
                                    variant="outlined" />
                            </Grid>
                          
                            <Grid item>
                                <FormControl variant="outlined" fullWidth>
                                    <InputLabel htmlFor="password">Password</InputLabel>
                                    <OutlinedInput
                                    id="password"
                                    name="password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                    />
                                </FormControl>
                            </Grid>    
                            <Grid item>
                            <FormControl variant="outlined" fullWidth>
                                <InputLabel htmlFor="password-confirm">Confirm Password</InputLabel>
                                <OutlinedInput
                                id="password-confirm"
                                name="password-confirm"
                                type={showPasswordConfirm ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPasswordConfirm}
                                        onMouseDown={handleMouseDownPasswordConfirm}
                                        edge="end"
                                    >
                                        {showPasswordConfirm ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                    </InputAdornment>
                                }
                                label="Confirm Password"
                                />
                            </FormControl>
                        </Grid>                              
                            {
                               error.status &&
                                <Alert severity={error.type} sx={{ ml:2 }}>{error.msg}</Alert>
                            }
                            <Grid item>
                                <Button fullWidth variant="contained" type='submit'>Register</Button>
                            </Grid>       
                            <Grid item>
                                <NavLink to="/user-login" variant="contained" style={{ color: '#ffffff' }}>Already Registered? LOGIN</NavLink>
                            </Grid>                            
                        </Grid>
                        
                    </Paper>
                    
                </Grid>
            </Container>
        </Box>
    );
};

export default Registration;