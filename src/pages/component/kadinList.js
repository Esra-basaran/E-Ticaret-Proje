import React,{useState,useEffect} from 'react';
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux';
import { womenAdd} from '../../store/sepetWomenSlice';
import { CardHeader } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import { createTheme,} from '@mui/material/styles';
import {Button, Card,CardContent,CardMedia,Typography,CardActionArea ,CardActions,Rating ,Stack,Checkbox} from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


function KadinList() {

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

   //redux ile sepete eklemek için dispath olusturdum
   const dispatch = useDispatch();
   const [womenProduct, setWomenProduct] = useState([]);

   // Verileri API'den çekme
  
   useEffect(() => {
     const fetchWomenProduct = async () => {
       try {
         const response = await axios.get('http://localhost:5001/womenProduct');
         setWomenProduct(response.data);
       } catch (error) {
         console.error('Veri çekilirken hata oluştu:', error);
       }
     };
 
     fetchWomenProduct();
   }, []);

   //sepete ürün ekleme kısmı
   const womenShoppingClick = (product) => {
     dispatch(womenAdd(product)); 
   };

  return (
   <>
      <div className='row searchProduct'>
        <input type="text" placeholder='ürün ara'  className='w-25 mb-2 p-1'/>
      </div>
      <div className='row'>
      {womenProduct.slice(0,6).map((women,index)=>(
            <div className='col-lg-4 mt-4'>
            <Card sx={{width:"100%"}} key={index}>
              <CardActionArea>
                  <CardHeader sx={{position:"relative"}}>
                  <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} color='error' sx={{position:"absolute",left:"250px",top:"12px"}} />
                  <CardMedia component="img" height="250" image={women.image} sx={{objectFit:"contain"}}/>
                </CardHeader>
                <CardContent>
                  <NavLink style={{ textDecoration: 'none'}} ><Typography variant="body2" component="div" fontWeight={700} >{women.brand}</Typography></NavLink> 
                  <Typography  variant="body2" component="div"  fontWeight={500} sx={{paddingBottom:"12px",borderBottom:"1px solid #f0f0f4"}}>{women.name} </Typography>
                  <Typography variant="body2" sx={{ color:{theme} ,marginTop:"12px"}}>{women.content} </Typography>
                  <Stack spacing={2} sx={{marginTop:"10px"}} direction="row" alignItems="center">
                    <Stack direction="row" alignItems="center"spacing={1} >
                      <Typography variant='body2'>{women.commentstart}</Typography>
                      <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} size="small" readOnly />
                    </Stack>
                    <Typography variant='body2'>({women.commentnumber}) </Typography>
                  </Stack>
                    <Typography variant='body1' fontWeight={700}color="error" sx={{marginTop:"20px"}}> {women.price} TL</Typography>
                </CardContent>
                <CardActions>
                  <Button sx={{width:"100%",backgroundColor:"#973131"}} variant="contained" onClick={() => womenShoppingClick(women)} >Sepete Ekle</Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </div>
      ))}
      </div>
      
   </>
  )
}
export default KadinList;