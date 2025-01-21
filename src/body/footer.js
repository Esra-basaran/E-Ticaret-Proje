import { Divider, Typography } from '@mui/material';
import React from 'react'
import { NavLink } from 'react-bootstrap';
import app from '../images/app.webp';
import play from '../images/play.webp';
import galery from '../images/gallery.webp';

function Footer() {
  return (
    <div className='bg-header'>
      <div className='container mt-3 mb-3'>
        <div className='row'>
          <div className='col-lg-3'>
            <ul className='footerList'>
              <li><h5 className='footerListTitle'>EsraBella</h5></li>
              <li><NavLink>Biz Kimiz</NavLink></li>
              <li><NavLink>Kariyer</NavLink></li>
              <li><NavLink>Sürdürülebilirlik</NavLink></li>
              <li><NavLink>İletişim</NavLink></li>
              <li></li>
            </ul>
          </div>
          <div className='col-lg-3'>
            <ul className='footerList'>
              <li><h5 className='footerListTitle'>Kampanyalar</h5></li>
              <li><NavLink>Kampanyalar</NavLink></li>
              <li><NavLink>Alışveriş Kredisi</NavLink></li>
              <li><NavLink>Elit Üyelik</NavLink></li>
              <li> <NavLink>Hediye Fikirleri</NavLink></li>
            </ul>
          </div>
          <div className='col-lg-3'>
            <ul className='footerList'>
              <li><h5 className='footerListTitle'>Satıcı</h5></li>
              <li><NavLink>EsraBella 'da Satış Yap</NavLink></li>
              <li><NavLink>Temel Kavramlar</NavLink></li>
              <li> <NavLink>EsraBella Akademi</NavLink></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </div>
          <div className='col-lg-3'>
            <ul className='footerList'>
              <li><h5 className='footerListTitle'>Yardım</h5></li>
              <li> <NavLink>Sıkca Sorulan Sorular</NavLink></li>
              <li><NavLink>Canlı Yardım / Asistan</NavLink></li>
              <li> <NavLink>Nasıl İade Edebilirim ?</NavLink></li>
              <li><NavLink>İşlem Rehberleri</NavLink></li>
            </ul>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12'>
             <div className='footerGoogle'>
              <img src={app} className='googleImg'/>
              <img src={play} className='googleImg'/>
              <img src={galery} className='googleImg'/>
             </div>
          </div>
        </div>
      </div>
      <div className='container-fluid' >
        <p style={{textAlign:"center"}}>Esra Nur BAŞARAN</p>
      </div>
    </div>
  )
}

export default Footer;