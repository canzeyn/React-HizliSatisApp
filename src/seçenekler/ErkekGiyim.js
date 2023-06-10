import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { sepeteEkle, istekListesineEkleButton } from '../redux/urunlerSlice';
import { Link } from 'react-router-dom';
import { BsFillEyeFill } from "react-icons/bs"


const ErkekGiyim = () => {

  const erkekGiyim = useSelector((state) => state.urunler.ürünler.erkek_giyim_Ürünler);

  const dispatch = useDispatch();
  return (
    <div className="bg-stone-50" >

      <div className=" grid grid-rows-auto grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-2  mr-2 ml-2">
        {erkekGiyim.map((urun) => (
          <div className=" group rounded-md shadow-lg shadow-gray-400  hover:rounded-lg    mt-2 mr-2 ml-2 mb-4   border border-gray-200  " key={urun.id}>
            <h2 className=" uppercase italic border-b underline underline-offset-2 text-center text-2xl text-stone-500">{urun.productName}</h2>
            <img className=" w-48 h-36 mx-auto sm:w-96 sm:h-48 m-3 object-contain object-center group-hover:scale-110 group-hover:opacity-75 duration-1000 rounded-xl" src={urun.img}></img>
            <p className='truncate text-center text-lg'>Fiyat: {urun.price}$</p>
            <p className="text-center truncate">{urun.productDescription}</p>
            {/* <div className="flex justify-between">
            <button onClick={() => dispatch(sepeteEkle(urun))} className="bg-yellow-400 flex items-center truncate font-medium font-custom  hover:ring-2 hover:ring-orange-300 hover:bg-transparent hover:text-orange-30 hover:shadow-md hover:text-orange-300 hover:shadow-orange-400  focus:ring text-white rounded-md p-1 m-2" > <lord-icon
              src="https://cdn.lordicon.com/cllunfud.json"
              trigger="hover"
              colors="outline:#fea027,primary:#646e78,secondary:#ebe6ef"
              style={{ width: "25px", height: "25px", marginRight: "5px" }}>
            </lord-icon>  Sepete Ekle</button>
            <button onClick={() => dispatch(istekListesineEkleButton(urun))} className="bg-purple-400 flex items-center truncate font-medium font-custom  hover:ring-2 hover:ring-purple-300 hover:bg-transparent hover:text-purple-300 hover:shadow-md hover:shadow-purple-400  focus:ring text-white rounded-md p-1 m-2">   <lord-icon
              src="https://cdn.lordicon.com/pnhskdva.json"
              trigger="hover"
              colors="primary:#800080"
              style={{ width: "25px", height: "25px", marginRight: "5px" }}>
            </lord-icon>istek listesine al</button>
          </div> */}

            <div className="flex justify-center items-center m-3">
              <button className=" text-white bg-amber-400  rounded-lg p-3"><Link className="flex items-center" to={`/product/${urun.id}`}>ayrıntılı bak <BsFillEyeFill className="ml-1 w-5 h-5" /></Link></button>
            </div>
          </div>
        ))}

      </div>

    </div>
  )
}

export default ErkekGiyim