
//redux a geçildi 
 
// import React, { useReducer, dispatch } from "react";
// import { createContext } from "react";
// import { v4 as uuidv4 } from "uuid";
// import SepetReducer from "./SepetReducer";
// export const GlobalContext = createContext();

// const initialState = {
//     ürünler: [
//         { id: uuidv4(), productName: "bilgisayar", adet: 1, price: 3500, productDescription: "on numara alet mq", img: "https://cdn.cimri.io/image/1200x1200/dizstbilgisayarfiyatlar_664523231.jpg" , tarih:"" },
//         { id: uuidv4(), productName: "klavye", adet: 1, price: 400, productDescription: "on numara alet mq", img: "https://m.media-amazon.com/images/I/71amwukDTfL._AC_UF1000,1000_QL80_.jpg" , tarih:"" },
//         { id: uuidv4(), productName: "monitör", adet: 1, price: 500, productDescription: "on numara alet mq", img: "https://cdn.cimri.io/image/1200x1200/monitrfiyatlar_632231780.jpg" , tarih:"" },
//         { id: uuidv4(), productName: "telefon", adet: 1, price: 1500, productDescription: "on numara alet mq", img: "https://maxi.az/upload/iblock/6f7/d2693a1acw772m2h8gjmtl80gqvttkui/telefon_iphone_14_pro_max_128gb_gold_detail.jpg" , tarih:"" },
//         { id: uuidv4(), productName: "tablet", adet: 1, price: 2000, productDescription: "on numara alet mq", img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-13-select-cell-spacegray-202210?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1664411207213" , tarih:"" },
//         { id: uuidv4(), productName: "hoparlör", adet: 1, price: 750, productDescription: "on numara alet mq", img: "https://m.media-amazon.com/images/I/71T1Iu2YCjL._AC_UF1000,1000_QL80_.jpg" , tarih:"" },
//         { id: uuidv4(), productName: "mousepad", adet: 1, price: 150, productDescription: "on numara alet mq", img: "https://tr.thermaltake.com/media/catalog/product/cache/023a745bb14092c479b288481f91a1bd/l/2/l20mousepad01.jpg" , tarih:"" },
//         { id: uuidv4(), productName: "kulaklık", adet: 1, price: 300, productDescription: "on numara alet mq", img: "https://m.media-amazon.com/images/I/61ZQBNk5n1L._AC_UF1000,1000_QL80_.jpg" , tarih:"" }
//     ],
//     Siparisler: [],
//     istekListesi: [],
//     eskiSiparisler: []
// }

// export const ProductProvider = (props) => {
//     const [state, dispatch] = useReducer(SepetReducer, initialState)

//     const ekle = (urun) => {
//         dispatch({ type: "SEPETE_EKLE", payload: urun }); //ekleme kısmı reducerdan aldık

//     };

//     const sil = (id) => {
//         dispatch({ type: "SEPETTEN_KALDIR", payload: id })
//     }

//     const adetArttır = (id) => {
//         dispatch({ type: "BUTON_ADET_ARTTIR", payload: id })
//     }

//     const adetAzalt = (id) => {
//         dispatch({ type: "BUTON_ADET_AZALT", payload: id })
//     }

//     const eskiSiparisEkle = (id) => {
//         const siparis = state.Siparisler.find((siparis) => siparis.id === id )
//         const yeniSiparis = {...siparis, tarih: new Date().toISOString()}
//         dispatch({ type: "ESKİ_SİPARİS_EKLE_BUTON", payload: yeniSiparis })
        
//     }

//     const siparisSil = (id) => {
//        dispatch({type:"SİPARİS_BİTTİ_BUTON_SİL" , payload:id})
//     }

//     const istekEkle = (urun) => {
//   dispatch({type:"İSTEK_LİSTESİNE_EKLE" , payload:urun})
//     }

//     const istekSil = (id) => {
//        dispatch({type:"İSTEK_LİSTESİ_SİL" , payload:id})
//     }

//     return (
//         <GlobalContext.Provider value={{ state, ekle, sil, adetArttır, adetAzalt, eskiSiparisEkle , siparisSil , istekEkle , istekSil}}>
//             {props.children}
//         </GlobalContext.Provider>
//     )
// }