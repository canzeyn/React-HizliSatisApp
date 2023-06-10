
// redux a geçildi

// export default (state, action) => {
    
//     switch (action.type) {

//         case "SEPETE_EKLE":
//             const urunID = action.payload.id;                  //burada ilk olarak seçilen ürünün id sini alıyoruzun ardından
//             //siparisler adlı state içinde var olup oladığını bakılır 
//             // bunun için index numarası alınır eğer index numarsı -1 dönmezse siparisler adlı dizide var olduğunu gösterir
//             //bu da tekrar siparisler adlı diziye eklemek yerine adet state ini güncelemek gerekir
//             //eğer yoksa siparisler adlı state içine ekler 
//             const siparisIndex = state.Siparisler.findIndex(
//                 (siparis) => siparis.id === urunID
//             );

//             if (siparisIndex !== -1) {
//                 return {
//                     ...state,
//                     Siparisler: state.Siparisler.map((siparis) =>
//                         siparis.id === urunID //kısımda  her bir değer için map fonksiyonu çalışır 
//                             ? { ...siparis, adet: siparis.adet + 1 } //eğer siparis state içindeki bir değer sipariş verilen bir değerin id si ile eşitse çalışır
//                             : siparis // ardıdan siparisin adet değerini 1 arttırır
//                     ),
//                 };
//             } else {
//                 return {
//                     ...state,
//                     Siparisler: [...state.Siparisler, action.payload],
//                 };
//             }

//         case "SEPETTEN_KALDIR":
//             return {
//                 ...state,
//                 Siparisler: state.Siparisler.filter(
//                     (siparis) => siparis.id != action.payload
//                 ),
//             };

//         case "BUTON_ADET_ARTTIR":
//             return {
//                 ...state,
//                 Siparisler: state.Siparisler.map((siparis) => siparis.id === action.payload
//                     ? { ...siparis, adet: siparis.adet + 1 }
//                     : siparis
//                 )
//             }

//         case "BUTON_ADET_AZALT":
//             return {
//                 ...state,
//                 Siparisler: state.Siparisler.map((siparis) => siparis.id === action.payload
//                     ? { ...siparis, adet: siparis.adet > 1 ? siparis.adet - 1 : siparis.adet }  //burada eğer siparis adeti 1 den daha aşağı olursa fonksiyon çalışmıyor 
//                     : siparis
//                 )
//             }
//         case "ESKİ_SİPARİS_EKLE_BUTON":
            
//             return {
//                 ...state,
//                 eskiSiparisler: [...state.eskiSiparisler, action.payload]

//             }

//         case "SİPARİS_BİTTİ_BUTON_SİL":
//             return {
//                 ...state,
//                 Siparisler: state.Siparisler.filter((siparis) => siparis.id != action.payload)
//             }

//             case "İSTEK_LİSTESİNE_EKLE":
//                 const urunlerId = action.payload.id; //seçilen ürünün idsini aldık ve urunlerıd adlı değişkene ekledik
//                 const istekIndex = state.istekListesi.findIndex( // burada seçilen ürünün id sinin istekListesi state içinde var olup olmadığını kontrol ediyoruz 
//                     (istek) =>  istek.id === urunlerId
//                 )
//                 if(istekIndex !== -1){ // eğer index sonucu 1 ise yani içerisinde var ise satate i olduğu gibi döndürü ve aynı şeyi görürüz
//                     return{...state}
//                 }else{
//                      return{ // eğer yoksa state içine ekler
//                     ...state,
//                     istekListesi:[...state.istekListesi , action.payload]
//                 }
//                 }

//                 case "İSTEK_LİSTESİ_SİL":
//                     return{
//                         ...state,
//                         istekListesi: state.istekListesi.filter((istek) =>    istek.id != action.payload)
//                     }
               



//         default:
//             return {
//                 state
//             }
//     }
// }