import React,{useState,useEffect} from 'react';
import { useDispatch } from 'react-redux';
import {womenAdd} from '../store/sepetWomenSlice';
import axios from 'axios';
import { createTheme,} from '@mui/material/styles';
import {AccordionSummary,AccordionDetails,Radio,FormControl,FormControlLabel,RadioGroup, Slider, Accordion,Button, Card,CardContent,CardMedia,Typography,CardActionArea ,CardActions,Rating ,Stack,Checkbox } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import { CardHeader } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';

//aralık filtresi için 
function valuetext(value: number) {
  return `${value}°C`;
}

function Kozmetik() {
  
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

//sepete ekleme fonksiyonu 
  const dispatch = useDispatch();
  const shoppingBasket = (product) =>{
    dispatch(womenAdd(product));
}
      
    const [checkedBrands, setCheckedBrands] = useState([]); // Seçilen markaları tutan state
    const [filteredProducts, setFilteredProducts] = useState([]); // Filtrelenmiş ürünler
    const [cosmeticProduct, setCosmeticProduct] = useState([]); // API'den çekilen ürünler
  
    // Verileri API'den çekme
    useEffect(() => {
      const fetchWomenProduct = async () => {
        try {
          const response = await axios.get('http://localhost:5001/cosmeticProducts');
          setCosmeticProduct(response.data);
          setFilteredProducts(response.data); // İlk başta tüm ürünleri göster
        } catch (error) {
          console.error('Veri çekilirken hata oluştu:', error);
        }
      };
  
      fetchWomenProduct();
    }, []);
  
    // Checkbox değişim fonksiyonu
    const CheckboxChange = (event) => {
      const { value, checked } = event.target;
  
      // Eğer checkbox seçildiyse, markayı ekle; çıkarılacaksa, diziden sil
      if (checked) {
        setCheckedBrands([...checkedBrands, value]);
      } else {
        setCheckedBrands(checkedBrands.filter((brand) => brand !== value));
      }
    };
  
    // Filtreleme butonuna basıldığında çağrılacak fonksiyon
    const handleFilter = () => {
      if (checkedBrands.length === 0) {
        setFilteredProducts(cosmeticProduct); // Eğer hiçbir şey seçilmediyse, tüm ürünleri göster
      } else {
        setFilteredProducts(
          cosmeticProduct.filter((product) => checkedBrands.includes(product.brand))
        ); // Seçilen markalara göre ürünleri filtrele
      }
    };


    const productsToShow = filteredProducts.length > 0 ? filteredProducts : cosmeticProduct.slice(0, 6);

  return (
    <>
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-lg-4'>
           <div className='filterBox'>
              <Typography variant="h6" fontWeight={500} sx={{marginTop:"12px",marginBottom:"20px"}}>Filtrele</Typography>
                <Accordion >
                  <AccordionSummary  expandIcon={<ExpandMoreIcon />}  aria-controls="panel1-content" id="panel1-header"> Marka </AccordionSummary>
                  <AccordionDetails>
                    <div className='scrollFiltre'>
                    <div><FormControlLabel control={<Checkbox   value="Avon"  onChange={CheckboxChange}  sx={{color: ' #973131','&.Mui-checked': {color: ' #973131', },}} />} label="Avon"/> </div>
                    <div><FormControlLabel control={<Checkbox value="Bioderma" onChange={CheckboxChange}   sx={{color: ' #973131','&.Mui-checked': {color: ' #973131', },}}/>} label="Bioderma"    /></div>
                    <div><FormControlLabel control={<Checkbox   value="Nivea"  onChange={CheckboxChange}   sx={{color: ' #973131','&.Mui-checked': {color: ' #973131', },}} />} label="Nivea" /></div>
                    <div><FormControlLabel control={<Checkbox  value="La roche" onChange={CheckboxChange}   sx={{color: ' #973131','&.Mui-checked': {color: ' #973131', },}} />} label="La roche"   /></div>
                    <div><FormControlLabel control={<Checkbox   value="Yves Roche" onChange={CheckboxChange}   sx={{color: ' #973131','&.Mui-checked': {color: ' #973131', },}}/>} label="Yves Roche"   /></div>
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
                <Button variant="contained" fullWidth sx={{marginTop:"20px",backgroundColor:"#973131"}}  onClick={handleFilter}  >Filtreleme Yap</Button>
          </div>
        </div>
        <div className='col-lg-8 mb-5'>
        <div className='row'>
          {productsToShow.map((women, index) => (
              <div key={index} className="col-lg-4 mb-4">
                <Card sx={{ width: "100%" }}>
                  <CardActionArea>
                    <CardHeader sx={{ position: "relative" }}>
                      <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />}color="error"sx={{ position: "absolute", left: "250px", top: "12px" }}/>
                      <CardMedia component="img" height="250"image={women.image} sx={{ objectFit: "contain" }}/>
                    </CardHeader>
                    <CardContent>
                      <NavLink style={{ textDecoration: 'none' }}><Typography variant="body2" component="div" fontWeight={700}> {women.brand}</Typography> </NavLink>
                      <Typography variant="body2"  component="div" fontWeight={500} sx={{ paddingBottom: "12px", borderBottom: "1px solid #f0f0f4" }}>{women.name} </Typography>
                      <Typography variant="body2"  sx={{ color: { theme }, marginTop: "12px" }} > {women.content} </Typography>
                      <Stack spacing={2} sx={{ marginTop: "10px" }} direction="row" alignItems="center">
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Typography variant="body2">{women.commentstart}</Typography>
                          <Rating name="half-rating-read"  defaultValue={2.5}  precision={0.5} size="small" readOnly />
                        </Stack>
                        <Typography variant="body2">({women.commentnumber})</Typography>
                      </Stack>
                      <Typography variant="body1" fontWeight={700} color="error" sx={{ marginTop: "20px" }} > {women.price} TL </Typography>
                    </CardContent>
                    <CardActions>
                      <Button sx={{ width: "100%", backgroundColor: "#973131" }} variant="contained"  onClick={() => shoppingBasket(women)}> Sepete Ekle </Button>
                    </CardActions>
                  </CardActionArea>
                </Card>
              </div>
          ))}
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Kozmetik;