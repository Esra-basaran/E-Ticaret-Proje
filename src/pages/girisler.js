import React from 'react'
import {Tabs,Tab,Box, Typography} from '@mui/material';
import Uye from './uye';
import Giris from './giris';
import { createTheme, ThemeProvider } from '@mui/material/styles';

//tabs kısmı için
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


function Girisler() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

    // siyah renk ekleme kısmı
    const theme = createTheme({
      palette: {
        primary: {
          main: '#212121', 
        },
      },
    });
  return (
    <>
      <div className='container mt-4 mb-5'>
        <div className='row'>
          <Typography variant='h6' fontWeight={700} align='center' sx={{marginTop:"2px",marginBottom:"5px"}}> Merhaba </Typography>
          <Typography sx={{marginBottom:"20px"}} variant='body1' fontWeight={500} align='center'>Giriş Yap Veya Hesap Oluştur İndirimleri Kaçırma ! </Typography>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
          <Box sx={{ width: '35%',marginLeft:"auto",marginRight:"auto",border:"1px solid gray",padding:"18px 30px",borderRadius:"20px"}} >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{'& .MuiTabs-indicator': {backgroundColor: '#973131'},
              '& .MuiTab-root': {color: '#4a4a4a','&.Mui-selected': {color: '#973131'},}, }} variant="fullWidth">
                <Tab label="Giriş Yap" {...a11yProps(0)} />
                <Tab label="Üye Ol" {...a11yProps(1)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <Giris  />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              <Uye />
            </CustomTabPanel>
          </Box>
          </div>
        </div>
      </div>
    </>

  )
}

export default Girisler;



