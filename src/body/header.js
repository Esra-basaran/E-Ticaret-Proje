import React from 'react';
import { useState } from 'react';
import Logo from '../images/logo3.png';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import EmailIcon from '@mui/icons-material/Email';
import SearchIcon from '@mui/icons-material/Search';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Button} from '@mui/material';
import Badge from '@mui/material/Badge';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

// siyah renk ekleme kısmı
  const theme = createTheme({
    palette: {
      primary: {
        main: '#212121', 
      },
    },
  });

function Header() {

 //açılır menu kısmı
  const [anchorEl, setAnchorEl] =useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
};

//sepeti dinamikleştirme kısmı
 const shoppingBasketNumber = useSelector((state)=> state.womenShoppingBasket.shoppingBasket);
 const shoppingNumber = shoppingBasketNumber.length;
 
  return (
    <>
     <div className='bg-header container-fluid'>
      <div className='row'>
        <div className='col-lg-9'></div>
        <div className='col-lg-3 header-div '>
          <div>
            <EmailIcon fontSize='small' sx={{marginRight:"7px"}}/><span className='fontDiv'>info@gmail.com </span>
          </div>
          <div >
            <PhoneInTalkIcon fontSize='small' sx={{marginRight:"7px"}} /><span className='fontDiv'>+9541-214-34-67</span>
          </div>
        </div>
      </div>
     </div>
     <nav className='pt-4' style={{ boxShadow:' 0 4px 4px -2px rgba(0, 0, 0, 0.2)' }}>
      <div className='container'>
        <div className='row '>
          <div className='col-lg-2'>
            <NavLink to="/"><img src={Logo} className='logoCss'/></NavLink>
          </div>
          <div className='col-lg-7'>
            <div className='searchDiv'>
              <input placeholder='Aradığınız ürün , kategori veya markayı yazınız' className='searchInput' />
              <button className='searchBtn'><SearchIcon/></button>
            </div>
          </div>
          <div className='col-lg-3'>
            <div className='navBtn'>
                <ThemeProvider theme={theme}>
                  <Button aria-controls={open ? 'basic-menu' : undefined} aria-haspopup="true"  aria-expanded={open ? 'true' : undefined} onClick={handleClick}>
                    <PermIdentityIcon  sx={{marginRight:"10px"}}/> <span  className='fw-medium'>Giriş Yap</span>
                  </Button>
                  <Menu id="basic-menu" sx={{padding:"20px"}}
                    anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{'aria-labelledby': 'basic-button',}}>
                    <MenuItem onClick={handleClose} sx={{'&:hover': { backgroundColor:'transparent',boxShadow: 'none',},}}>
                      <NavLink to="/girisler"> <Button color='error' variant="contained" sx={{width:"100%"}} >Giriş Yap</Button></NavLink>  
                    </MenuItem>
                    <MenuItem onClick={handleClose} sx={{'&:hover': { backgroundColor:'transparent',boxShadow: 'none',},}} >
                    <NavLink to="/girisler"><Button color='error' variant="outlined"sx={{width:"100%"}}>Üye Ol </Button></NavLink>  
                    </MenuItem>
                  </Menu>
                </ThemeProvider>
                <ThemeProvider theme={theme}>
                 <NavLink  to="/sepet">
                   <Button>
                    <Badge badgeContent={shoppingNumber } color="error"><ShoppingCartIcon sx={{marginRight:"10px" }} color='black' badge={2} /></Badge>
                    <span className='fw-medium'> Sepetim</span>
                  </Button>
                  </NavLink>
                </ThemeProvider>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
            <ul className='menuDiv'>
              <li> 
                <ThemeProvider theme={theme}>
                <NavLink to="/kadin"><Button  sx={{fontWeight:"700"}}>Kadın</Button></NavLink>
                </ThemeProvider>
              </li>
              <li>
                <ThemeProvider theme={theme}>
                 <NavLink to="/erkek"><Button sx={{fontWeight:"700"}}>Erkek</Button></NavLink>
                </ThemeProvider>
              </li>
              <li>
                <ThemeProvider theme={theme}>
                  <Button sx={{fontWeight:"700"}}>Ev & Yaşam</Button>
                </ThemeProvider>
              </li>
              <li>
                <ThemeProvider theme={theme}>
                   <Button sx={{fontWeight:"700"}}>Elektronik</Button>
                </ThemeProvider>
              </li>
              <li> 
                <ThemeProvider theme={theme}>
                  <NavLink to="/kozmetik"> <Button sx={{fontWeight:"700"}}>Kozmetik</Button> </NavLink>
                </ThemeProvider>
              </li>
              <li>
                <ThemeProvider theme={theme}>
                  <Button sx={{fontWeight:"700"}}>Süpermarket</Button>
                </ThemeProvider>
              </li>
            </ul>
          </div>
        </div>
      </div>
     </nav>
    </>
  )
}
export default Header;