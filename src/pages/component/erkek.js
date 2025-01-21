import React , {useState} from 'react'
import ErkekList from './erkekList';
import ErkekList2 from './erkekList2';
import Filtre from './filtre';
import { NavLink,useNavigate} from 'react-router-dom';
import {PaginationItem,Pagination,Stack } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

function Erkek() {
   //sayfa geçiş kısmı 
    const navigateMale = useNavigate();
    const [pagesMale,setPagesMale] = useState(1);
    const handlePagesChange = (event,value)=>{
     setPagesMale(value);
    }

  return (
    <>
    <div className='container mt-5 mb-5'>
      <div className='row'>
         <div className='col-lg-3'>
            <Filtre/>
         </div>
         <div className='col-lg-9'>
          {pagesMale === 1 ? <ErkekList /> : <ErkekList2 />}
        </div>
      </div>
      <div className='row'>
    <Stack spacing={2} justifyContent="center" direction="row" sx={{marginTop:"50px",marginBottom:"20px"}}>
        <Pagination count={2} size="small" page={pagesMale} onChange={handlePagesChange}
          renderItem={(item)=>(
            <PaginationItem {...item} slots={{previous:ArrowBack , nexts:ArrowForward}}/>
        )} />
    </Stack>
   </div>
    </div> 
    </>
  )
}

export default Erkek;