// import { useContext } from 'react';
// import { GlobalContext } from "../context/GlobalContext"

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { istekListesineEkleButton, sepeteEkle } from '../redux/urunlerSlice';


const List = () => {
  

  
  
  return (
    <div className="bg-stone-50" >
           
           <div className="hidden md:baslık md:flex md:flex-col  md:justify-center md:items-center md:h-screen ">
            <h2 className="text-6xl mb-4  bg-gradient-to-r from-amber-100 via-amber-300 to-purple-300 rounded-lg p-5 font-bold">HızlıSatışşApp'e  Hoş geldiniz 👍</h2>
            <p className="text-center text-amber-600 text-2xl">Alışveriş için yukarıdan bir seçeneğe tıklayınız</p>
            
           </div>
           

    </div>
  )
}

export default List