import React from 'react';
import { Formik, Form, Field} from "formik";
import * as Yup from "yup";
import {Input,InputLabel,InputAdornment,FormControl,Button,IconButton,TextField, Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { Password } from '@mui/icons-material';

function Giris({values}) {
 //mui şifre görüntü kısmı 
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
 };

const validationSchema = Yup.object({
 eposta: Yup.string()
    .required("Boş Bırakamazsınız")
    .email("Bir Email olmalı "),
  password: Yup.string()
    .required("Boş Bırakamazsınız")
    .matches(6,"En Az altı karakter olmalı")
});




  const girisSubmit = (valueGiris)=>{
    console.log("girdin",valueGiris);
  }

  return (
   <>
    <div style={{paddingLeft: '20px',paddingRight: '20px'}}>
      <Typography variant="h6" component="div" sx={{marginBottom:"20px"}} > Giriş Yap</Typography>
      <TextField label="E-Posta" id="eposta" name="eposta" fullWidth variant="standard" slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            },
        }} 
        sx={{
          '& .MuiInput-underline:before': {
            borderBottomColor: '#4a4a4a',
            color:'#4a4a4a' // Varsayılan border rengi
          },
          '& .MuiInput-underline:hover:before': {
            borderBottomColor: '#4a4a4a',
            color:'#4a4a4a' // Hover durumunda border rengi
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: '#4a4a4a',
            color:'#4a4a4a' // Focus durumunda border rengi
          },
          '& .MuiInputBase-input': {
            color: '#4a4a4a', // Yazı rengi
          },
          '& .Mui-focused .MuiInputBase-input': {
            color: '#4a4a4a', // Focus olduğunda yazı rengi
          },
          '& .MuiInputLabel-root': {
            color: '#4a4a4a', // Varsayılan label rengi
          },
          '& .Mui-focused .MuiInputLabel-root': {
            color: '#4a4a4a', // Varsayılan label rengi
          },
        }}  
      />
      <FormControl  variant="standard"
            sx={{marginTop:"20px",
                '& .MuiInput-underline:before': {
                  borderBottomColor: '#4a4a4a',
                  color:'#4a4a4a' // Varsayılan border rengi
                },
                '& .MuiInput-underline:hover:before': {
                  borderBottomColor: '#4a4a4a',
                  color:'#4a4a4a' // Hover durumunda border rengi
                },
                '& .MuiInput-underline:after': {
                  borderBottomColor: '#4a4a4a',
                  color:'#4a4a4a' // Focus durumunda border rengi
                },
                '& .MuiInputBase-input': {
                  color: '#4a4a4a', // Yazı rengi
                },
                '& .Mui-focused .MuiInputBase-input': {
                  color: '#4a4a4a', // Focus olduğunda yazı rengi
                },
                '& .MuiInputLabel-root': {
                  color: '#4a4a4a', // Varsayılan label rengi
                },
                '& .Mui-focused  .MuiInputLabel-root': {
                  color: '#4a4a4a', // Varsayılan label rengi
                },
              }}   fullWidth>
            <InputLabel htmlFor="standard-adornment-password">Şifre</InputLabel>
            <Input
            name="password"
              id="standard-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label={
                      showPassword ? 'hide the password' : 'display the password'
                    }
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    onMouseUp={handleMouseUpPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            
            />
      </FormControl>
      <Button variant="contained"  fullWidth sx={{backgroundColor:"#973131",marginTop:"35px"}} onClick={girisSubmit}>Giriş Yap </Button>
    </div>
   </>
  )
}
export default Giris;