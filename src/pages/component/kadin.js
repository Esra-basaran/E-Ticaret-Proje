import React , {useState,useEffect} from 'react';
import axios from 'axios';
import KadinList from './kadinList';
import KadinList2 from './kadinList2';
import Filtre from './filtre';
import { NavLink,useNavigate} from 'react-router-dom';
import {PaginationItem,Pagination,Stack } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

function Kadin() {
   //sayfa geçiş kısmı 
    const navigate = useNavigate();
    const [pages,setPages] = useState(1);
    const handlePagesChange = (event,value)=>{
     setPages(value);
    }


  return (
    <>
    <div className='container mt-5 mb-5'>
      <div className='row'>
         <div className='col-lg-3'>
            <Filtre />
         </div>
         <div className='col-lg-9'>
          {pages === 1 ? <KadinList   /> : <KadinList2   />}
        </div>
      </div>
      <div className='row'>
    <Stack spacing={2} justifyContent="center" direction="row" sx={{marginTop:"50px",marginBottom:"20px"}}>
        <Pagination count={2} size="small" page={pages} onChange={handlePagesChange}
          renderItem={(item)=>(
            <PaginationItem {...item} slots={{previous:ArrowBack , next:ArrowForward}}/>
        )} />
    </Stack>
   </div>
    </div> 
    </>
  )
}

export default Kadin;