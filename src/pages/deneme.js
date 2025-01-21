import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AccordionSummary, AccordionDetails, Checkbox, FormControlLabel, Accordion } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Deneme = () => {
 
  const [checkedBrands, setCheckedBrands] = useState([]); // Seçilen markaları tutan state
  const [filteredProducts, setFilteredProducts] = useState([]); // Filtrelenmiş ürünler
  const [womenProduct, setWomenProduct] = useState([]); // API'den çekilen ürünler

  // Verileri API'den çekme
  useEffect(() => {
    const fetchWomenProduct = async () => {
      try {
        const response = await axios.get('http://localhost:3001/womenProduct');
        setWomenProduct(response.data);
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
      setFilteredProducts(womenProduct); // Eğer hiçbir şey seçilmediyse, tüm ürünleri göster
    } else {
      setFilteredProducts(
        womenProduct.filter((product) => checkedBrands.includes(product.brand))
      ); // Seçilen markalara göre ürünleri filtrele
    }
  };

  return (
    <>
      <div className="mt-5 mb-5" style={{ width: "500px", marginLeft: "auto", marginRight: "auto" }}>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
            Marka
          </AccordionSummary>
          <AccordionDetails>
            <div className="scrollFiltre">
              <div>
                <FormControlLabel
                  control={<Checkbox sx={{ color: ' #973131', '&.Mui-checked': { color: ' #973131' } }} />}
                  label="Mango"
                  value="Mango"
                  onChange={CheckboxChange}
                />
              </div>
              <div>
                <FormControlLabel
                  control={<Checkbox sx={{ color: ' #973131', '&.Mui-checked': { color: ' #973131' } }} />}
                  label="Zara"
                  value="Zara"
                  onChange={CheckboxChange}
                />
              </div>
              <div>
                <FormControlLabel
                  control={<Checkbox sx={{ color: ' #973131', '&.Mui-checked': { color: ' #973131' } }} />}
                  label="Mavi"
                  value="Mavi"
                  onChange={CheckboxChange}
                />
              </div>
              <div>
                <FormControlLabel
                  control={<Checkbox sx={{ color: ' #973131', '&.Mui-checked': { color: ' #973131' } }} />}
                  label="Koton"
                  value="Koton"
                  onChange={CheckboxChange}
                />
              </div>
              <div>
                <FormControlLabel
                  control={<Checkbox sx={{ color: ' #973131', '&.Mui-checked': { color: ' #973131' } }} />}
                  label="U.S Polo"
                  value="U.S Polo"
                  onChange={CheckboxChange}
                />
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        {/* Filtreleme Butonu */}
        <button onClick={handleFilter}>Filtrele</button>
      </div>

      {/* Filtrelenmiş Ürünler */}
      <div className="w-50 mt-5">
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <h4>{product.name}</h4>
            <p>{product.brand}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Deneme;
