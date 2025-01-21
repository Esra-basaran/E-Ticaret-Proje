import axios from 'axios';
import React, { useState,useEffect } from 'react';
import { createTheme,} from '@mui/material/styles';
import {Button,Typography,Checkbox} from '@mui/material';
import {AccordionSummary,AccordionDetails,Radio,FormControl,FormControlLabel,RadioGroup, Slider, Accordion } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';


function valuetext(value: number) {
    return `${value}°C`;
  }

function Filtre() {
      // siyah renk ekleme kısm
          const theme = createTheme({
            palette: {
              primary: {
                main: '#212121', 
              },
            },
          });
    
      //checkbox kısmı filterle
       const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    
      //cinsiyet filtrelem kısmı
       const [value, setValue] = React.useState('kadın');
        const handleChange = (event) => {
          setValue((event.target ).value);
        };
    
      //fiyat kısmının rander 
       const [valueFiyat, setValueFiyat] = useState([40, 75]);
        const handleChangeFiyat = (event, newValue) => {
          setValueFiyat(newValue);
        };

  return (
   <>
        <div className='filterBox'>
            <div>
             <Typography variant="h6" fontWeight={500} sx={{marginTop:"12px",marginBottom:"20px"}}>Filtrele</Typography>
              <Accordion >
                <AccordionSummary  expandIcon={<ExpandMoreIcon />}  aria-controls="panel1-content" id="panel1-header"> Marka </AccordionSummary>
                <AccordionDetails>
                  <div className='scrollFiltre'>
                  <div><FormControlLabel control={<Checkbox value="Mango"  sx={{color: ' #973131','&.Mui-checked': {color: ' #973131', },}} />} label="Mango"  /> </div>
                  <div><FormControlLabel control={<Checkbox   value="Zara"    sx={{color: ' #973131','&.Mui-checked': {color: ' #973131', },}}/>} label="Zara" /></div>
                  <div><FormControlLabel control={<Checkbox  value="Mavi"   sx={{color: ' #973131','&.Mui-checked': {color: ' #973131', },}} />} label="Mavi" /></div>
                  <div><FormControlLabel control={<Checkbox  value="Koton"    sx={{color: ' #973131','&.Mui-checked': {color: ' #973131', },}} />} label="Koton" /></div>
                  <div><FormControlLabel control={<Checkbox   value="U.S Polo"  sx={{color: ' #973131','&.Mui-checked': {color: ' #973131', },}}/>} label="U.S Polo" /></div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{marginTop:"15px"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">Beden</AccordionSummary>
                <AccordionDetails>
                  <div className='scrollFiltre'>
                    <div><FormControlLabel control={<Checkbox  sx={{color: ' #973131','&.Mui-checked': {color: ' #973131', },}} />} label="XS" /></div>
                    <div><FormControlLabel control={<Checkbox sx={{color: ' #973131','&.Mui-checked': {color: ' #973131', },}} />} label="S" /></div>
                    <div><FormControlLabel control={<Checkbox   sx={{color: ' #973131','&.Mui-checked': {color: ' #973131', },}} />} label="M" /></div>
                    <div><FormControlLabel control={<Checkbox  sx={{color: ' #973131','&.Mui-checked': {color: ' #973131', },}} />} label="L" /></div>
                    <div><FormControlLabel control={<Checkbox   sx={{color: ' #973131','&.Mui-checked': {color: ' #973131', },}}   />} label="XL" /></div>
                    <div><FormControlLabel control={<Checkbox   sx={{color: ' #973131','&.Mui-checked': {color: ' #973131', },}}  />} label="XXL" /></div>
                  </div>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{marginTop:"15px"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header"> Cinsiyet </AccordionSummary>
                <AccordionDetails>
                   <div className='scrollFiltre'>
                    <FormControl>
                        <RadioGroup value={value} onChange={handleChange}>
                          <FormControlLabel value="kadın" control={<Radio  sx={{color: ' #973131','&.Mui-checked': {color: ' #973131', },}} />} label="Kadın" />
                          <FormControlLabel value="erkek" control={<Radio   sx={{color: ' #973131','&.Mui-checked': {color: ' #973131', },}}/>} label="Erkek" />
                          <FormControlLabel value="diger" control={<Radio  sx={{color: ' #973131','&.Mui-checked': {color: ' #973131', },}}/>} label="Diğer" />
                        </RadioGroup>
                    </FormControl>                 
                   </div>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{marginTop:"15px"}} >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}  aria-controls="panel3-content" id="panel3-header">Fiyat</AccordionSummary>
                <AccordionDetails>
                   <Slider  value={valueFiyat} onChange={handleChangeFiyat}  valueLabelDisplay="auto" getAriaValueText={valuetext} sx={{color:" #973131"}}/>
                </AccordionDetails>
              </Accordion>
              <Accordion sx={{marginTop:"15px"}}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">Ürün Puanı</AccordionSummary>
                <AccordionDetails>
                <div className='filtreFont'>
                  <Checkbox  {...label}   sx={{color: ' #973131','&.Mui-checked': {color: ' #973131', },}}/>
                   <StarIcon sx={{color:"#faaf00"}}/> 4 yıldız ve üzeri 
                </div>
                <div className='filtreFont' >
                  <Checkbox  {...label}   sx={{color: ' #973131','&.Mui-checked': {color: ' #973131', },}}/>
                   <StarIcon sx={{color:"#faaf00"}}/> 3 yıldız ve üzeri 
                </div>
                <div className='filtreFont' >
                  <Checkbox  {...label}   sx={{color: ' #973131','&.Mui-checked': {color: ' #973131', },}}/>
                   <StarIcon sx={{color:"#faaf00"}}/> 2 yıldız ve üzeri 
                </div>
                <div className='filtreFont'>
                  <Checkbox  {...label}   sx={{color: ' #973131','&.Mui-checked': {color: ' #973131', },}}/>
                   <StarIcon sx={{color:"#faaf00"}}/> 1 yıldız ve üzeri 
                </div>
                </AccordionDetails>
              </Accordion>
              <Button variant="contained" fullWidth sx={{marginTop:"20px",backgroundColor:"#973131"}} >Filtreleme Yap</Button>
            </div>
            
       </div>
   </>
  )
}

export default Filtre;