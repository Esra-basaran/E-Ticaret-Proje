import React ,{useState,useEffect} from 'react';
import axios from 'axios';
import { NavLink} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination,Autoplay,A11y, Navigation } from "swiper/modules";
import { CardHeader } from 'react-bootstrap';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Slider1 from '../images/banner2.jpg';
import Slider2 from '../images/banner5.jpg';
import Slider3 from '../images/banner3.jpg';
import Slider4 from '../images/banner4.jpg';
import banner1 from '../images/home.banner1.jpg';
import banner2 from '../images/home.banner2.jpg';

import banner3 from '../images/pastel1.jpg';
import banner4 from '../images/pastel2.jpg';
import banner5 from '../images/pastel3.jpg';
import banner6 from '../images/pastel4.jpg';
import banner7 from '../images/banner5.jpg';


import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Button, Divider,Card,CardContent,CardMedia,Typography,CardActionArea ,CardActions,Rating ,Stack,Checkbox} from '@mui/material';
//icon kısmı importu
import MenuBookIcon from '@mui/icons-material/MenuBook';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly';
import PetsIcon from '@mui/icons-material/Pets';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import { useDispatch } from 'react-redux';
import { womenAdd } from '../store/sepetWomenSlice';

function Home() {
  // siyah renk ekleme kısmı
    const theme = createTheme({
      palette: {
        primary: {
          main: '#212121', 
        },
      },
    });
 //fav kısmı
   const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  //product çekme kısmı 
   const [products,setProducts] = useState ([]);

     // Verileri JSON-Server'dan Çekme
  useEffect(() => {
    axios
      .get("http://localhost:5001/products") // API adresi
      .then((response) => {
        setProducts(response.data); // Çekilen veriyi state'e aktar
      })
      .catch((error) => console.error("Veri çekilirken hata oluştu:", error));
  }, []); 

//sepete ekle
  const dispatch = useDispatch();
  const homeBasketClick = (product) => {
      dispatch(womenAdd(product));
   }
 
  return (
  <>
   {/* slider ve yan menü kısmı */}
   <div className='container'>
    <div className='row'>
      <div className='col-lg-4'>
       <Stack sx={{border:"1px solid #f0f0f4",borderTop:"none",width:"70%",paddingTop:"10px",paddingBottom:"10px"}}  >
        <ThemeProvider theme={theme} >
          <Button sx={{height:"60px",textAlign:"left",justifyContent:'flex-start',paddingLeft:"30px"}}><CheckroomIcon sx={{marginRight:"15px"}}/> Giyim</Button>
           <Divider/>
          <Button  sx={{height:"60px",textAlign:"left",justifyContent:'flex-start',paddingLeft:"30px"}}><ElectricBoltIcon sx={{marginRight:"15px"}}/>Elektronik</Button>
              <Divider/>
          <Button  sx={{height:"60px",textAlign:"left",justifyContent:'flex-start',paddingLeft:"30px"}}><MapsHomeWorkIcon sx={{marginRight:"15px"}}/>Ev</Button>
              <Divider/>
            <Button  sx={{height:"60px",textAlign:"left",justifyContent:'flex-start',paddingLeft:"30px"}}><PetsIcon sx={{marginRight:"15px"}}/>Hayvan</Button>
              <Divider/>
            <Button  sx={{height:"60px",textAlign:"left",justifyContent:'flex-start',paddingLeft:"30px"}}><ChildFriendlyIcon sx={{marginRight:"15px"}}/>Bebek</Button>
              <Divider/>
            <Button  sx={{height:"60px",textAlign:"left",justifyContent:'flex-start',paddingLeft:"30px"}}><CardGiftcardIcon sx={{marginRight:"15px"}}/>Hediye</Button>
              <Divider/>
            <Button  sx={{height:"60px",textAlign:"left",justifyContent:'flex-start',paddingLeft:"30px"}}><MenuBookIcon sx={{marginRight:"15px"}}/>Kitap</Button>

          </ThemeProvider>
       </Stack>
      </div>
      <div className='col-lg-8'>
        <Swiper modules={[ Pagination, Autoplay, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{ clickable: true}}
          autoplay={{
            delay: 3000, // 3 saniyede bir slayt değişecek
            disableOnInteraction:false, 
          }}>
            <SwiperSlide><img src={Slider1} className='sliderImg' /></SwiperSlide>
            <SwiperSlide><img src={Slider2} className='sliderImg' /></SwiperSlide>
            <SwiperSlide><img src={Slider3} className='sliderImg' /></SwiperSlide>
            <SwiperSlide><img src={Slider4} className='sliderImg' /></SwiperSlide>
        </Swiper>
      </div>
    </div>
   </div>
    {/* haftanın ürünleri kısmı */}
   <div className='container mt-5 mb-5'>
    <div className='row'>
      <Divider/>
      <Typography variant='h5' component="div" fontWeight={700} sx={{marginTop:"25px",marginBottom:"25px"}}>Haftanın Ürünleri </Typography>
    </div>
    <div className='row'>
      {products.slice(0, 4).map((product)=>(
         <div className='col-lg-3'>
         <Card sx={{width:"100%"}} >
           <CardActionArea>
             <CardHeader sx={{position:"relative"}}>
               <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} color='error' sx={{position:"absolute",left:"214px",top:"12px"}} />
               <CardMedia component="img" height="250" image={product.image} sx={{objectFit:"contain"}}/>
             </CardHeader>
             <CardContent>
               <NavLink style={{ textDecoration: 'none'}} ><Typography variant="body2" component="div" fontWeight={700} >{product.brand}</Typography></NavLink> 
               <Typography  variant="body2" component="div"  fontWeight={500} sx={{paddingBottom:"12px",borderBottom:"1px solid #f0f0f4"}}>{product.name} </Typography>
               <Typography variant="body2" sx={{ color:{theme} ,marginTop:"12px"}}>{product.content}</Typography>
               <Stack spacing={2} sx={{marginTop:"10px"}} direction="row" alignItems="center">
                 <Stack direction="row" alignItems="center"spacing={1} >
                   <Typography variant='body2'>{product.commentstart}</Typography>
                   <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} size="small" readOnly />
                 </Stack>
                 <Typography variant='body2'>({product.commentnumber}) </Typography>
               </Stack>
               <Typography variant='body1' fontWeight={700}color="error" sx={{marginTop:"20px"}}> {product.price} TL</Typography>
             </CardContent>
             <CardActions>
                <Button sx={{width:"100%"}} variant="contained" color='error' onClick={()=>homeBasketClick(product)}>Sepete Ekle</Button>
             </CardActions>
           </CardActionArea>
         </Card>
       </div>
      ))}
    </div>
   </div>
   {/* banner kısmı */}
   <div className='container'>
    <div className='row'>
      <div className='col-lg-6'>
        <img src={banner1} className='w-100 bannerHover' />
      </div>
      <div className='col-lg-6'>
        <img src={banner2} className='w-100 bannerHover' />
      </div>
    </div>
   </div>
    {/* sizin için seçtiklerimiz kısmı slider */}
   <div className='container mt-5 mb-5' >
    <div className='row mt-5 mb-4'>
      <Typography variant='h5' component="div" fontWeight={700} >Sizin İçin Seçtiklerimiz </Typography>
    </div>
    <Swiper spaceBetween={20} slidesPerView={4}   modules={[ Autoplay, A11y, Navigation]} navigation style={{padding:"5px"}}
      breakpoints={{
        // Telefonlar
        0: {
          slidesPerView: 1,
        },
        // Tabletler
        768: {
          slidesPerView: 2,
        },
        // Bilgisayar ekranları
        992: {
          slidesPerView: 4,
        },
        // Büyük ekranlar
        1200: {
          slidesPerView: 4,
        },
      }}
     >
      {products.slice(4,12).map((product)=>(
       <SwiperSlide>
         <Card sx={{width:"100%"}} >
           <CardActionArea>
             <CardHeader sx={{position:"relative"}}>
               <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} color='error' sx={{position:"absolute",left:"214px",top:"12px"}} />
               <CardMedia component="img" height="250" image={product.image}/>
             </CardHeader>
             <CardContent>
               <NavLink style={{ textDecoration: 'none'}} ><Typography variant="body2" component="div" fontWeight={700} >{product.brand}</Typography></NavLink> 
               <Typography  variant="body2" component="div"  fontWeight={500} sx={{paddingBottom:"12px",borderBottom:"1px solid #f0f0f4"}}>Evidence Parfüm-Banyo Seti </Typography>
               <Typography variant="body2" sx={{ color:{theme} ,marginTop:"12px"}}>{product.content}</Typography>
               <Stack spacing={2} sx={{marginTop:"10px"}} direction="row" alignItems="center">
                 <Stack direction="row" alignItems="center"spacing={1} >
                   <Typography variant='body2'>{product.commentstart}</Typography>
                   <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} size="small" readOnly />
                 </Stack>
                 <Typography variant='body2'>({product.commentnumber}) </Typography>
               </Stack>
               <Typography variant='body1' fontWeight={700}color="error" sx={{marginTop:"20px"}}> {product.price} TL</Typography>
             </CardContent>
             <CardActions>
               <Button sx={{width:"100%"}} variant="contained" color='error'onClick={()=>homeBasketClick(product)} >Sepete Ekle</Button>
             </CardActions>
           </CardActionArea>
         </Card>
       </SwiperSlide>
      ))}
    </Swiper>
  </div>
   {/* iconlu div kısmı */}
  <div className='container mt-5 mb-5'>
    <div className='row justify-content-center'>
      <div className='col-lg-3'>
        <div className='promotionCard'>
          <div>
            <RestartAltIcon sx={{marginLeft:"30px",fontSize:"40px"}}/>
            <Typography sx={{borderBottom:"1px solid #f0f0f4",paddingBottom:"15px"}} variant="body1"  fontWeight={600} component="div"> Hızlı Sipariş </Typography>
          </div>
          <Typography variant='body2' sx={{lineHeight:"27px",width:"200px",textAlign:"center"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </Typography>
        </div>
      </div>
      <div className='col-lg-3'>
        <div className='promotionCard'>
          <div>
            <LocalShippingIcon sx={{marginLeft:"37px",fontSize:"40px"}}/>
            <Typography sx={{borderBottom:"1px solid #f0f0f4",paddingBottom:"15px"}} variant="body1"  fontWeight={600} component="div"> Güvenli Kargo</Typography>
          </div>
          <Typography variant='body2' sx={{lineHeight:"27px",width:"200px",textAlign:"center"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
        </div>
      </div>
      <div className='col-lg-3'>
        <div className='promotionCard'>
          <div>
            <VolunteerActivismIcon sx={{marginLeft:"45px",fontSize:"40px"}}/>
            <Typography sx={{borderBottom:"1px solid #f0f0f4",paddingBottom:"15px"}} variant="body1"  fontWeight={600} component="div"> Kapıda Teslimat </Typography>
          </div>
          <Typography variant='body2' sx={{lineHeight:"27px",width:"200px",textAlign:"center"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Typography>
        </div>
      </div>
    </div>
  </div>
   {/* afis slider */}
    {/* sizin için seçtiklerimiz kısmı slider */}
    <div className='container mt-5 mb-5' >
    <div className='row mt-5 mb-4'>
      <Typography variant='h5' component="div" fontWeight={700} >Sizin İçin Seçtiklerimiz </Typography>
    </div>
    <Swiper spaceBetween={20} slidesPerView={4}   modules={[ Autoplay, A11y, Navigation]} style={{padding:"5px"}}
      breakpoints={{ 0: {slidesPerView: 1,}, 768:{ slidesPerView: 2,}, 992:{slidesPerView: 2,}, 1200: {slidesPerView: 2,},}}>
       <SwiperSlide >
         <Card sx={{width:"100%"}} >
           <CardActionArea>
             <CardHeader sx={{position:"relative"}}>
               <CardMedia component="img" height="250" image={banner3}/>
             </CardHeader>
           </CardActionArea>
         </Card>
       </SwiperSlide>
       <SwiperSlide>
         <Card sx={{width:"100%"}} >
           <CardActionArea>
             <CardHeader sx={{position:"relative"}}>
               <CardMedia component="img" height="250" image={banner4}/>
             </CardHeader>
           </CardActionArea>
         </Card>
       </SwiperSlide>
       <SwiperSlide>
         <Card sx={{width:"100%"}} >
           <CardActionArea>
             <CardHeader sx={{position:"relative"}}>
               <CardMedia component="img" height="250" image={banner5}/>
             </CardHeader>
           </CardActionArea>
         </Card>
       </SwiperSlide>
       <SwiperSlide>
         <Card sx={{width:"100%"}} >
           <CardActionArea>
             <CardHeader sx={{position:"relative"}}>
               <CardMedia component="img" height="250" image={banner6}/>
             </CardHeader>
           </CardActionArea>
         </Card>
       </SwiperSlide>
       <SwiperSlide>
         <Card sx={{width:"100%"}} >
           <CardActionArea>
             <CardHeader sx={{position:"relative"}}>
               <CardMedia component="img" height="250" image={banner7}/>
             </CardHeader>
           </CardActionArea>
         </Card>
       </SwiperSlide>
    </Swiper>
  </div>
  </>
  )
}

export default Home;