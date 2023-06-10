import React from 'react';
import { useSelector , useDispatch } from 'react-redux';
import { sepeteEkle , istekListesiSil } from '../redux/urunlerSlice';
import {BsTrash3} from "react-icons/bs";
import {GrAddCircle} from "react-icons/gr";
import {BiCartAdd} from "react-icons/bi"
// import { useContext } from 'react';
// import { GlobalContext } from '../context/GlobalContext';

const WishList = () => {
  const istekListesi = useSelector((state) => state.urunler.istekListesi );
  const dispatch = useDispatch();
  // const {istekEkle , state , ekle , istekSil} = useContext(GlobalContext);
  // const {istekListesi} = state;
  return (
    <div>
     <div>
        <h3 className="text-center text-5xl mt-3 mb-4 font-sans font-semibold" style={{ color: "rgba(195, 83, 212, 0.441)" }}>istek Listeniz</h3>
      </div>

<div className="grid grid-rows-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center">
      {istekListesi ?  istekListesi.map((istek) =>(
        <div className="group border border-neutral-300 rounded-xl m-2 hover:shadow hover:shadow-stone-500/50 ">
       <h3 className="group-hover:underline group-hover:underline-offset-1 text-center font-serif text-2xl font-semibold uppercase text-stone-500">{istek.productName}</h3>
       <img className="w-52 h-52 object-contain object-center mx-auto group-hover:scale-110 group-hover:opacity-75  duration-1000" src={istek.img}></img>
       <p className="text-center font-semibold text-m"> Fiyat:{istek.price}$</p>
       
       <div className="flex justify-evenly mt-3 mb-2">

       <button onClick={() => {dispatch(sepeteEkle(istek)); dispatch(istekListesiSil(istek.id));  }} className="  flex text-white bg-gradient-to-r from-lime-700 via-lime-400 to-lime-200 p-1 rounded-2xl font-medium">sepete ekle <BiCartAdd className="w-6 h-6 ml-1" /></button>
       <button onClick={() => dispatch(istekListesiSil(istek.id))} className="  flex text-white bg-gradient-to-r from-rose-700 via-rose-400 to-rose-200 p-2 rounded-2xl">listeden sil <BsTrash3 className="w-5 h-5 ml-1" /> </button>
       
       </div>

       </div>
      ))  : "isteiniz yok"}
    </div>

    </div>
  )
}

export default WishList