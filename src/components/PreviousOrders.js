import React, { useState } from 'react';
import { useSelector } from 'react-redux';
// import { useContext } from 'react';
// import { GlobalContext } from '../context/GlobalContext';

const PreviousOrders = () => {
  // const { state } = useContext(GlobalContext);
  // const { eskiSiparisler } = state;
  const eskiSiparisler = useSelector((state) => state.urunler.eskiSiparisler)
  const [sortOrders , setSortOrders] = useState("yeniden eskiye"); //sıralamak için bir sortedorders adında state

  const sortedOrders = [...eskiSiparisler].sort((a , b) => { //sıralama işlemi için  sort kullnıyoruz ama öncesinde eskiSiparisleri kopyalıyoruzki değişmesin
    if(sortOrders === "yeniden_eskiye"){ 
      return new Date(b.tarih) - new Date(a.tarih); //burada amaç yeniyi bulmak bunun için iki sparisin tarihlerini kıyaslıyor eğer ikinci girenden birinciyi çıkarırken sonuç pozitifse b önce yazılır böylelikle yeniler önce yazılır
    } else {
      return new Date(a.tarih) - new Date(b.tarih); // eğer tarihler çıkarılırken sonuç negatif olursa a önce yazılır böylelikle eski olanlar önce yazılır
    }

  })
  return (
    <div>

      <div style={{ display: "flex", alignItems: "center", flexDirection: "column", margin: "15px" }}>
        <h1>Eski Siparisleriniz:</h1>
        <div style={{display:"flex" , flexDirection:"row"}}>
          <h3 style={{marginRight:"10px"}}>Sırala:</h3>
          <select onChange={e => setSortOrders(e.target.value)} style={{ width: "170px", border: "1px solid #ccc", borderRadius: "4px", height: "50px", padding: "5px", fontSize: "16px" }}>
            <option value="-">-</option>
            <option value="eskiden_yeniye">yeniden eskiye</option>
            <option value="yeniden_eskiye">eskiden yeniye</option>
          </select>
        </div>
      </div>

      {sortedOrders ? sortedOrders.map((eskisiparis) => (
        <div style={{ display: "flex", flexDirection: "row", maxWidth: "850px", alignItems: "center", justifyContent: "space-around", border: "1px solid #ccc", marginLeft: "10px", marginTop: "10px", borderRadius: "40px", boxShadow: "3px 2px 10px 2px rgba(0, 3, 58, 0.5)", padding: "5px" }} key={eskisiparis.id}>
          <img style={{ width: "20%", border: "1px solid", margin: "5px", borderRadius: "25px" }} src={eskisiparis.img}></img>
          <h3>ürün adı:<span>{eskisiparis.productName}</span></h3>
          <p style={{ marginRight: "10px" }}>siparis edilen adet:{eskisiparis.adet}</p>
          <p>toplam fiyat:{eskisiparis.price * eskisiparis.adet}</p>  {/*toplam fiyatı hesaplıyor*/}
          <p>siparis teslim edilen tarih: {new Date(eskisiparis.tarih).toLocaleString()}</p>

        </div>
      )) : "daha önce siparis vermediniz"}
    </div>
  )
}

export default PreviousOrders