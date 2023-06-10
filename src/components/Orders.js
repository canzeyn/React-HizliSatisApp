import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { butonAdetArttır, butonAdetAzalt, sepettenKaldır, eskiSiparisEkle, satınAlıncaklarEkle } from '../redux/urunlerSlice';
import { Link, useNavigate } from 'react-router-dom';
// import { useContext } from 'react';
// import { GlobalContext } from '../context/GlobalContext';


const Orders = () => {
  // const { state, sil, adetArttır, adetAzalt, eskiSiparisEkle, siparisSil } = useContext(GlobalContext);
  // const { Siparisler } = state;
  // console.log(Siparisler);
  const Siparisler = useSelector((state) => state.urunler.Siparisler);

  const toplamFiyat = Siparisler ? Siparisler.reduce((toplam, siparis) => { //topşlam değişkeni ilk oalrak sıfır girilir ardından siparis yani gelen her veri için
    return toplam + siparis.price * siparis.adet; //toplam içine  aktarılır fiyat ile adet çarpımı bu sayede toplam fiyat bulunur  
  }, 0) : 0;

  const navigate = useNavigate();

  const handleSiparisVer = async () => { //asenkron işlem başlatıyoruz çünkü dispatch işleminin bitecek yani veriler state içine eklenecek sonrasında yönlendirme işlemi yapılacak  

    await dispatch(satınAlıncaklarEkle(Siparisler));


    navigate("/Satın_Alma_İslemleri"); //burada yönlendirme yapıyoruz
  }

  const dispatch = useDispatch();
  return (
    <div>

      <div>
        <h3 className="text-center text-5xl mt-3 mb-4 font-sans font-semibold" style={{ color: "rgba(195, 83, 212, 0.441)" }}>Sepetiniz</h3>
      </div>

      {Siparisler.length > 0  ? <div className="grid grid-rows-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center justify-center">

        {Siparisler.length >= 1 ? Siparisler.map((urun) => (
          <div key={urun.id} className="group border border-neutral-300 rounded-xl m-2 ">
            <h1 className="group-hover:underline group-hover:underline-offset-1 text-center font-serif text-2xl font-semibold uppercase text-stone-500" >{urun.productName}</h1>
            <img className="w-52 h-52 object-contain object-center mx-auto group-hover:scale-110 group-hover:opacity-75  duration-1000" src={urun.img}></img>
            <p className="text-center">{urun.price}$</p>
            <div className="flex justify-evenly items-center">

              <button className=" bg-gradient-to-r from-purple-700 via-purple-400 to-purple-200 md:ml-2 rounded-full w-10 h-10 items-center justify-center" onClick={() => dispatch(butonAdetAzalt(urun.id))}><span className="text-3xl md:text-xl text-white">-</span></button >
              <p>{urun.adet} adet </p>
              <button className="bg-gradient-to-r from-purple-700 via-purple-400 to-purple-200  md:mr-2 rounded-full w-10 h-10" onClick={() => dispatch(butonAdetArttır(urun.id))} > <span className="text-white">+</span></button>

            </div>

            <div className="flex justify-evenly mt-3">
              <button className="text-white hover:text-pink-500 bg-gradient-to-r from-pink-700 via-pink-400 to-pink-200 p-2 m-2 rounded-2xl  hover:outline hover:outline-offset-1 hover:outline-pink-400  hover:from-transparent hover:via-transparent hover:to-transparent" onClick={() => dispatch(sepettenKaldır(urun.id))}>sepetten kaldır</button>
              

            </div>
          

          </div>
        )) :
         <p className="text-center items-center font-bold "><span> </span> <span className="text-rose-800">Ürün Ekleyiniz!!</span></p>}  { /*ortalanmadı ortalanacak */}

      </div> : <div className=" flex flex-row justify-center mt-10  items-center">
        <div className="border border-neutral-200 rounded-2xl p-2 bg-rose-100 hover:bg-rose-300"><p className="text-center  items-center font-bold "><span>Sepetinizde ürün yok </span> <span className="text-rose-800">Ürün Ekleyiniz!!</span></p></div>
      </div>}

      <div className="flex justify-center mt-5 mb-3">

        {Siparisler.length >= 1 ? <div className="border border-stone-300 rounded-2xl p-6 flex flex-col items-center">
          <h2 className="uppercase underline underline-offset-1 font-bold text-xl">Sepetinizde Bulunan Ürünler:</h2>
          {Siparisler.length >= 1 ? Siparisler.map((urun) => (
            <div className="flex justify-evenly" key={urun.id}>
              <p className="text-lg ml-2 mr-2 items-center">{urun.productName}</p>
              <p className="items-center">{urun.adet} adet</p>
            </div>
          )) : "sepete ürün ekleyiniz"}

          <h2 className="uppercase mt-5 font-black">Toplam Fiyat : {toplamFiyat}$</h2>
          <Link onClick={handleSiparisVer} className="bg-gradient-to-r from-amber-600 via-amber-400 to-amber-200 p-2 rounded-2xl text-white mt-2 hover:outline hover:outline-offset-1 hover:outline-amber-400 hover:from-transparent hover:via-transparent hover:to-transparent hover:text-amber-500">Siparis Ver</Link>
        </div> : ""}

      </div>


    </div>
  )
}

export default Orders