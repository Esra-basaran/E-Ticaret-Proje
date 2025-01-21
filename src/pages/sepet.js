import React, { useState,useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { womenRemove} from '../store/sepetWomenSlice';

import {Button, Divider,Card,CardContent,CardMedia,Typography,CardActions ,Stack,Box,Alert} from '@mui/material';
import { createTheme} from '@mui/material/styles';
import Product1 from '../images/parfume1.jpg';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
function Sepet() {
    // siyah renk ekleme kısmı
      const theme = createTheme({
        palette: {
          primary: {
            main: '#212121', 
          },
        },
    });
 
  const shoppingBasket = useSelector((state)=> state.womenShoppingBasket.shoppingBasket);
  const shoppingTotal = useSelector((state)=> state.womenShoppingBasket.totalPrice);

 
  const [count ,setCount] = useState(1);
   
  const increase = (womenİd) =>{
    setCount((count +1) * womenİd);
    console.log(count);
  }
  const decrease = (womenİd) =>{
   if (count > 1) {
    setCount((count - 1)* womenİd);
   console.log(count);
   }
  }

//silme işlemi

 const dispatch = useDispatch();

  const shoppingRemoveClick = (product) => {
    dispatch(womenRemove(product));
  }

  
  return (
    <>
     <div className='container mt-5 mb-5'>
       <div className='row' style={{justifyContent:"center"}}>
        <div className='col-lg-7'> 
          <Typography variant='h6' fontWeight={600} sx={{marginBottom:"20px"}}>Sepetteki Ürünler</Typography>
          {shoppingTotal > 0 ? ( 
            shoppingBasket.map((shopping,index )=>( 
              <div className='productDiv mt-4' key={index}>
                <Card sx={{ display: 'flex' }}>
                    <CardMedia component="img"  sx={{ width:"151px"}}  image={shopping.image} />
                      <Box sx={{ display: 'flex', flexDirection: 'column',padding:"10px 20px 0px 20px",justifyContent:'space-between' }}>
                        <CardContent sx={{padding:"0px"}}>
                          <Typography component="div" variant="body1" fontWeight={500}>{shopping.brand}</Typography>
                          <Typography  variant="subtitle1"  component="div" sx={{ color: 'text.secondary' }}>{shopping.name}</Typography>
                          <Typography component="div" sx={{marginTop:"10px",color: 'text.secondary'}}> {shopping.content} </Typography>
                        </CardContent>
                        <CardActions sx={{justifyContent:"space-between",paddingLeft:"5px",paddingRight:"20px"}} >
                          <Stack direction="row" alignItems="center"spacing={2} >
                            <div style={{border:"1px solid gray",borderRadius:"20px",padding:"5px 12px",display: "flex",alignItems:"center",gap:"10px"}}>
                              <RemoveIcon sx={{fontSize:"17px",color:" #973131"}}  onClick={()=>decrease(shopping.piece)}  />
                              <span className='basketNumber'>{count}</span>
                              <AddIcon sx={{fontSize:"17px",color:" #973131"}} onClick={()=>increase(shopping.piece)} />
                            </div>
                            <DeleteIcon sx={{fontSize:"17px",color:" #973131"}} onClick={() => shoppingRemoveClick(shopping)} />
                          </Stack>
                          <Typography variant='h6' fontWeight={500}  component="div" sx={{marginLeft:"200px",color:"#973131"}} >{(shopping.price)*(count)} TL</Typography>
                        </CardActions> 
                      </Box>
                </Card>
              </div>
            ))
          ):(
            <Alert variant="outlined" severity="error" sx={{ borderColor: '#973131 '}}>Sepettinizde Ürün Bulunmamaktadır</Alert> 
          ) } 
        </div>
        <div className='col-lg-3'>
          <div className='basketDiv'>
            <Typography variant='body1' component="div" fontWeight={600} sx={{marginBottom:"7px"}} >Sepetim</Typography>
            <Typography variant='h6' component="div" sx={{color:"#973131",marginBottom:"20px"}}>
              {shoppingTotal > 0 ? ((shoppingTotal*count)+ 50 ):(
                0)} TL</Typography>
            <Divider sx={{backgroundColor:" #4a4a4a"}}/>
            <Stack direction="row" sx={{justifyContent:"space-between",marginTop:"20px"}}>
              <Typography variant='body2' component="p">Ürünler: </Typography>
              <Typography variant='body2' component="p">{shoppingTotal*count}TL</Typography>
            </Stack>
            <Stack direction="row" sx={{justifyContent:"space-between",marginTop:"10px"}}>
              <Typography variant='body2' component="p">Kargo : </Typography>
              <Typography variant='body2' component="p">50 TL</Typography>
            </Stack>
            <Button variant="contained" fullWidth sx={{backgroundColor:"#973131",marginTop:"20px"}}>Alışverişi Tamamla</Button>
            </div>
        </div>
       </div>
     </div>
    </>
  )
}

export default Sepet;