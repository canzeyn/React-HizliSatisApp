import react from "react";
import './App.css';
import {BrowserRouter as Router , Route , Routes } from "react-router-dom";
import Header from "./components/Header";
import List from "./components/List";
import Orders from "./components/Orders"
import WishList from "./components/WishList"
import PreviousOrders from "./components/PreviousOrders"
// import {ProductProvider} from "./context/GlobalContext"
import {Provider} from "react-redux";
import store from "./redux/store";
import Teknoloji from "./seçenekler/Teknoloji";
import Ev_aleti from "./seçenekler/Ev_aleti";
import Araba from "./seçenekler/Araba";
import Yemek from "./seçenekler/Yemek";
import ErkekGiyim from "./seçenekler/ErkekGiyim";
import KadınGiyim from "./seçenekler/KadınGiyim";
import Footer from "./components/Footer";
import Kartİslemleri from "./components/Kartİslemleri";
import ProductDetails from "./components/ProductDetails";


function App() {
  return (
    <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
     <Provider store={store}>
     <Router>
        <Routes>
          <Route path="/" element={<><Header /><List /></>}></Route>
          <Route path="/orders" element={<><Header /><Orders /></>}></Route>
          <Route path="/wishList" element={<><Header /><WishList /></>}></Route>
          <Route path="/previousOrders" element={<><Header /><PreviousOrders /></>}></Route>
          <Route path="/teknoloji_Urunler" element={<><Header /><Teknoloji /></>}></Route>
          <Route path="/ev_aleti_Urunler" element={<><Header /><Ev_aleti /></>}></Route>
          <Route path="/araba_Urunler" element={<><Header /><Araba /></>}></Route>
          <Route path="/yemek_Urunler" element={<><Header /><Yemek /></>}></Route>
          <Route path="/erkek_giyim_Urunler" element={<><Header /><ErkekGiyim /></>}></Route>
          <Route path="/kadın_giyim_Urunler" element={<><Header /><KadınGiyim /></>}></Route>
          <Route path="/Satın_Alma_İslemleri" element={<><Kartİslemleri /></>}></Route>
          <Route path="/product/:id" element={<><Header /> <ProductDetails /></>}></Route>
        </Routes>
      <Footer />
      </Router>
     </Provider>
    </div>
  );
}

export default App;
