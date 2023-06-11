import React from 'react'
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch } from 'react-redux';
import { sepeteEkle, istekListesineEkleButton, yorumEkle } from '../redux/urunlerSlice';
import Alert from '@mui/material/Alert';
import { useState } from 'react';
import { styled } from '@mui/system';
import { TextField } from '@mui/material';
import { makeStyles } from '@mui/material';

const ProductDetails = () => {
    const { id } = useParams(); //uuid ile gelen id verisini başka bir formata çevirme number(id) gibi yoksa hata alırsın 
    const urunler = useSelector(state => state.urunler);

    let urun;
    let yorumYazı = "yorumunuz : ";
    const dispatch = useDispatch();
 
    const [yeniYorum, setYeniYorum] = useState(''); //yorum satatei temizlenecek 

    for (let urunTuru in urunler.ürünler) { //burada urunTuru adındaki değişken aslında ürünler state içideki tüm elemanları temsil ediyor 
        urun = urunler.ürünler[urunTuru].find(urun => urun.id === id); //tüm ürünler geziliyor ve useParams ile çekilen id ile ürünler içinde eşleşen id bulunuyor 
        if (urun) break; // ürün true değer olunca yani eşleşme bulununca döngü durduruluyor 
    }

    if (!urun) {
        return <div className="flex justify-center mt-5"><Alert severity="info"><p className="font-bold text-2xl">Ürün Bulunamadı</p></Alert></div>
    }

    const handleChange = (e) => {
        setYeniYorum(e.target.value)
    }

    const handleYorumEkle = () => {
        if (yeniYorum.trim() !== '') { // yeniYorum'un boş olup olmadığını kontrol eder
            dispatch(yorumEkle({ id: urun.id, yorum: yeniYorum })); // reducera id ve input içindeki yazıyı gönderir
            setYeniYorum(''); // yorum yapıldıktan sonra input içini boşaltır
            console.log(yorumYazı, yeniYorum)
        } else {
            alert('Yorum alanı boş bırakılamaz!'); // Eğer yorum boşsa, kullanıcıya uyarı verilir.
        }
    }

return (
    <div>
        {/* fotoğraf ve açıklama alanı */}
        <section className="fotoğraflarVeAçıklamaAlanı">

            <div className="flex flex-col   md:flex-row justify-center space-x-8 my-9">

                <div className="m-2 md:m-0 md:basis-1/2  p-1">
                    <Carousel autoPlay infiniteLoop transitionTime={700} interval={5000} showThumbs={false} className="rounded-xl">
                        {urun.images.map((image, index) => (
                            <div key={index}>
                                <img style={{ width: "500px", height: "500px", objectFit: "contain" }} className="rounded-3xl" src={image} />

                            </div>

                        ))
                        }
                    </Carousel>
                </div>

                {/* ürün başlık ve açıklama ve butonlar */}
                <div className=" w-full md:basis-1/3 border border-gray-300 rounded-xl p-1 mt-5 sm:mt-0  ">
                    <h2 className="text-center mt-2 text-2xl uppercase font-semibold text-rose-800 ">{urun.productName}</h2>
                    <p className="text-center font-bold uppercase">fiyat:{urun.price} $</p>
                    <p className="text-center mt-2 indent-5">{urun.productDescription}</p>

                    <div className="flex justify-evenly mt-1">
                        <button onClick={() => dispatch(sepeteEkle(urun))} className="bg-yellow-400 flex items-center truncate font-medium font-custom  hover:ring-2 hover:ring-orange-300 hover:bg-transparent hover:text-orange-30 hover:shadow-md hover:text-orange-300 hover:shadow-orange-400  focus:ring text-white rounded-md p-4 m-2" > <lord-icon
                            src="https://cdn.lordicon.com/cllunfud.json"
                            trigger="hover"
                            colors="outline:#fea027,primary:#646e78,secondary:#ebe6ef"
                            style={{ width: "25px", height: "25px", marginRight: "5px" }}>
                        </lord-icon>  Sepete Ekle</button>
                        <button onClick={() => dispatch(istekListesineEkleButton(urun))} className="bg-purple-400 flex items-center truncate font-medium font-custom  hover:ring-2 hover:ring-purple-300 hover:bg-transparent hover:text-purple-300 hover:shadow-md hover:shadow-purple-400  focus:ring text-white rounded-md p-4 m-2">   <lord-icon
                            src="https://cdn.lordicon.com/pnhskdva.json"
                            trigger="hover"
                            colors="primary:#800080"
                            style={{ width: "25px", height: "25px", marginRight: "5px" }}>
                        </lord-icon>istek listesine al</button>
                    </div>

                </div>

            </div>
        </section>
        {/* yorum alanı */}
        <section>
            <div className="yorumAlanıİnput mt-16 ml-5">

                <div className="yorumBaslık">
                    <h2 className="text-2xl">Yorum Yapınız..</h2>
                </div>

                <div className="flex space-x-1 md:space-x-3 mt-3">

                <textarea className=" w-yorumİnputGenişlik resize-none overflow-auto h-24  border border-zinc-300" value={yeniYorum} onChange={handleChange} placeholder="Yorumunuzu Buraya Yazınız"></textarea>
               
                     {/* <TextField id="filled-basic" multiline minRows={3} className={`${classes.customTextField} w-yorumİnputGenişlik`}  value={yeniYorum} onChange={handleChange} placeholder="Yorumunuzu Buraya Yazınız" variant="filled" />   yorum buradan alıncak  */}
                    <div className="flex  items-center "><button className=" text-white bg-gradient-to-r from-purple-700 via-purple-400 to-purple-200 rounded-2xl p-5" onClick={handleYorumEkle}>Gönder</button></div>
                </div>


                <div className="mt-5 mb-5">

                    <div>
                        {urun.yorumlar && urun.yorumlar.map((yorum, index) => (
                            <div key={index} className=" border border-gray-500 rounded-xl p-1 mt-2 md:w-1/2 max-h-40 overflow-y-auto  overflow-x-hidden whitespace-normal">
                                <p className="mt-2 text-base font-medium indent-3" >{yorum}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    </div>
)
}

export default ProductDetails