import { createSlice } from "@reduxjs/toolkit";
import Swal from 'sweetalert2';
import 'animate.css';


const SepetWomenSlice = createSlice({
    name:"womenShoppingBasket",
    initialState:{
      womenProducts:[],
      shoppingBasket:[],
      totalPrice:0,
    },
    reducers:{
      womenAdd: (state, action) => {
        const add = action.payload; 
        const control = state.shoppingBasket.some((item)=> item.id === add.id);

        if(!control) {
          state.shoppingBasket.push(add); 
          const toplamFiyat = state.totalPrice += (add.price * add.piece);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Sepete Eklendi",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              title: 'my-custom-title',
              popup: 'my-custom-popup',
              confirmButton: 'my-custom-confirm'
            }
          }); 
          console.log(toplamFiyat);
        }else{
          Swal.fire({
            position: "top-end",
            icon: "error",
            title: "Bu Ürün Sepette Mevcut",
            showConfirmButton: false,
            timer: 1500,
            customClass: {
              title: 'my-custom-title',
              popup: 'my-custom-popup',
              confirmButton: 'my-custom-confirm'
             }
          });    
        }
      },

      womenRemove:(state,action)=>{
        const productId = action.payload.id;
        const shoppingRemove =  state.shoppingBasket.find((item)=> item.id === productId);

        if(shoppingRemove){
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Ürünüz Sepetten Çıkartıldı",
            showConfirmButton: false,
            timer: 1500,
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          state.shoppingBasket = state.shoppingBasket.filter((item)=> item.id !== productId);
          state.totalPrice -= (shoppingRemove.price);
        }
      }
    }

});
export  const {womenAdd,womenRemove} = SepetWomenSlice.actions;
export default SepetWomenSlice .reducer;
