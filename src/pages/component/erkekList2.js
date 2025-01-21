import React,{useState,useEffect}  from 'react';
import { useDispatch } from 'react-redux';
import { womenAdd } from '../../store/sepetWomenSlice';
import axios from 'axios';
import { CardHeader } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import { createTheme,} from '@mui/material/styles';
import {Button, Card,CardContent,CardMedia,Typography,CardActionArea ,CardActions,Rating ,Stack,Checkbox} from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


function ErkekList2() {
  // siyah renk ekleme kısm
    const theme = createTheme({palette: {primary: {main: '#212121', },},});
  //checkbox kısmı
   const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
 // Api ile db veri çekmek için
  const [maleProducts,setMaleProducts]= useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5001/maleProduct") // API adresi
      .then((response) => {
        setMaleProducts(response.data); // Çekilen veriyi state'e aktar
      })
      .catch((error) => console.error("Veri çekilirken hata oluştu:", error));
  }, []); 
 
//sepete ürün ekleme fonksiyonu
   const dispatch = useDispatch();
   const shoppingbasket = (product) => {
   dispatch(womenAdd(product));
   }

  return (
  <>  
   <div className='row searchProduct'>
    <input type="text" placeholder='ürün ara'  className='w-25 mb-1 p-1'/>
   </div>
   <div className='row'>
    {maleProducts.slice(6,12).map((maleProduct)=>(
      <div className='col-lg-4 mt-4'>
        <Card sx={{width:"100%"}} >
          <CardActionArea>
            <CardHeader sx={{position:"relative"}}>
              <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} color='error' sx={{position:"absolute",left:"250px",top:"12px"}} />
              <CardMedia component="img" height="250" image={maleProduct.image} sx={{objectFit:"contain"}}/>
            </CardHeader>
            <CardContent>
              <NavLink style={{ textDecoration: 'none'}} ><Typography variant="body2" component="div" fontWeight={700} >{maleProduct.brand}</Typography></NavLink> 
              <Typography  variant="body2" component="div"  fontWeight={500} sx={{paddingBottom:"12px",borderBottom:"1px solid #f0f0f4"}}>{maleProduct.name}</Typography>
              <Typography variant="body2" sx={{ color:{theme} ,marginTop:"12px"}}>{maleProduct.content}</Typography>
              <Stack spacing={2} sx={{marginTop:"10px"}} direction="row" alignItems="center">
                <Stack direction="row" alignItems="center"spacing={1} >
                  <Typography variant='body2'>{maleProduct.commentstart}</Typography>
                  <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} size="small" readOnly />
                </Stack>
                <Typography variant='body2'>({maleProduct.commentnumber}) </Typography>
              </Stack>
              <Typography variant='body1' fontWeight={700}color="error" sx={{marginTop:"20px"}}> {maleProduct.price} TL</Typography>
            </CardContent>
            <CardActions>
              <Button sx={{width:"100%",backgroundColor:"#973131"}} variant="contained" onClick={()=> shoppingbasket(maleProduct)}>Sepete Ekle</Button>
            </CardActions>
          </CardActionArea>
        </Card>
      </div>
    ))}
   </div>
  </>
  )
}

export default ErkekList2;