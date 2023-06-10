import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  ürünler: {
    teknolojikÜrünler: [
      {
        id: uuidv4(),
        productName: "bilgisayar",
        adet: 1,
        price: 3500,
        productDescription: "on numara alet mq",
        img: "https://cdn.cimri.io/image/1200x1200/dizstbilgisayarfiyatlar_664523231.jpg",
        images: [
          "https://cdn.cimri.io/image/1200x1200/dizstbilgisayarfiyatlar_664523231.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "klavye",
        adet: 1,
        price: 400,
        productDescription: "on numara alet mq",
        img: "https://m.media-amazon.com/images/I/71amwukDTfL._AC_UF1000,1000_QL80_.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "monitör",
        adet: 1,
        price: 500,
        productDescription: "on numara alet mq",
        img: "https://cdn.cimri.io/image/1200x1200/monitrfiyatlar_632231780.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:{}
      },
      {
        id: uuidv4(),
        productName: "telefon",
        adet: 1,
        price: 1500,
        productDescription: "on numara alet mq",
        img: "https://maxi.az/upload/iblock/6f7/d2693a1acw772m2h8gjmtl80gqvttkui/telefon_iphone_14_pro_max_128gb_gold_detail.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "tablet",
        adet: 1,
        price: 2000,
        productDescription: "on numara alet mq",
        img: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/ipad-pro-13-select-cell-spacegray-202210?wid=940&hei=1112&fmt=p-jpg&qlt=95&.v=1664411207213",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "hoparlör",
        adet: 1,
        price: 750,
        productDescription: "on numara alet mq",
        img: "https://m.media-amazon.com/images/I/71T1Iu2YCjL._AC_UF1000,1000_QL80_.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "mousepad",
        adet: 1,
        price: 150,
        productDescription: "on numara alet mq",
        img: "https://tr.thermaltake.com/media/catalog/product/cache/023a745bb14092c479b288481f91a1bd/l/2/l20mousepad01.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "kulaklık",
        adet: 1,
        price: 300,
        productDescription: "on numara alet mq",
        img: "https://m.media-amazon.com/images/I/61ZQBNk5n1L._AC_UF1000,1000_QL80_.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
    ],
    ev_aletleri_Ürünler: [
      {
        id: uuidv4(),
        productName: "buzdolabı",
        adet: 1,
        price: 3500,
        productDescription: "on numara alet mq",
        img: "https://cdn.dsmcdn.com/ty12/product/media/images/20200922/12/11375312/87822309/1/1_org_zoom.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "çamaşır Makinesi",
        adet: 1,
        price: 3500,
        productDescription: "on numara alet mq",
        img: "https://cdn.dsmcdn.com/ty296/product/media/images/20220115/7/26825621/159890262/1/1_org_zoom.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "kurutma makinesi",
        adet: 1,
        price: 3500,
        productDescription: "on numara alet mq",
        img: "https://cdn.dsmcdn.com/ty194/product/media/images/20211009/0/143255418/257849583/1/1_org_zoom.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "bulaşık makinesi",
        adet: 1,
        price: 3500,
        productDescription: "on numara alet mq",
        img: "https://cdn.dsmcdn.com/ty406/product/media/images/20220422/13/96241733/455721630/1/1_org_zoom.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "tost makinesi",
        adet: 1,
        price: 3500,
        productDescription: "on numara alet mq",
        img: "https://cdn.dsmcdn.com/ty855/product/media/images/20230502/0/336502953/923872080/1/1_org_zoom.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "fırın",
        adet: 1,
        price: 3500,
        productDescription: "on numara alet mq",
        img: "https://cdn.dsmcdn.com/ty527/product/media/images/20220910/15/171595003/562218340/1/1_org_zoom.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "mikro dalga",
        adet: 1,
        price: 3500,
        productDescription: "on numara alet mq",
        img: "https://cdn.dsmcdn.com/ty661/product/media/images/20221224/16/246003960/659492899/1/1_org_zoom.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "kahve makinesi",
        adet: 1,
        price: 3500,
        productDescription: "on numara alet mq",
        img: "https://cdn.dsmcdn.com/ty833/product/media/images/20230418/13/327419701/166986801/1/1_org_zoom.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
    ],
    yemek_Ürünler: [
      {
        id: uuidv4(),
        productName: "kebab",
        adet: 1,
        price: 3500,
        productDescription: "on numara alet mq",
        img: "https://fastly.4sqi.net/img/general/600x600/89902827_qRWT2yVA_h4U0lgvGPtLX89rzAh9qOVGu66rM9APb1Q.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "tavuk döner",
        adet: 1,
        price: 3500,
        productDescription: "on numara alet mq",
        img: "https://images.deliveryhero.io/image/fd-tr/LH/ig4d-hero.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "patlıcan musakka",
        adet: 1,
        price: 3500,
        productDescription: "on numara alet mq",
        img: "https://cdn.ye-mek.net/App_UI/Img/out/650/2014/09/firinda-patlican-musakka-resimli-yemek-tarifi(15).jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "hamburger",
        adet: 1,
        price: 3500,
        productDescription: "on numara alet mq",
        img: "https://iasbh.tmgrup.com.tr/78d2fd/821/464/0/0/724/409?u=https://isbh.tmgrup.com.tr/sbh/2021/09/30/hamburger-tarifi-evde-hamburger-nasil-yapilir-1633000765331.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "pizza",
        adet: 1,
        price: 3500,
        productDescription: "on numara alet mq",
        img: "https://imgrosetta.mynet.com.tr/file/11786131/11786131-900x900.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "tost",
        adet: 1,
        price: 3500,
        productDescription: "on numara alet mq",
        img: "https://images.deliveryhero.io/image/fd-tr/LH/p6x1-hero.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "california buritto",
        adet: 1,
        price: 3500,
        productDescription: "on numara alet mq",
        img: "https://i.ytimg.com/vi/dD6vOOEZUp0/maxresdefault.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "taco",
        adet: 1,
        price: 3500,
        productDescription: "on numara alet mq",
        img: "https://i.lezzet.com.tr/images-xxlarge-recipe/tacos_meksika_mutfagi-dc7ec63b-e1df-4acf-bdcc-96c7a609e85b.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
    ],
    araba_Ürünler: [
      {
        id: uuidv4(),
        productName: "porche cayenne",
        adet: 1,
        price: 250000,
        productDescription:
          "Sunt aliquip culpa aute aute id sint consectetur adipisicing cillum minim duis. Commodo et nulla ipsum ea. Ex tempor incididunt dolor sunt proident sint esse deserunt nisi tempor minim nisi pariatur. Ea excepteur dolore ea elit occaecat in consectetur esse mollit. aliquip culpa aute aute id sint consectetur adipisicing cillum minim duis. Commodo aliquip culpa aute aute id sint consectetur adipisicing cillum minim duis. Commodo aliquip culpa aute aute id sint consectetur adipisicing cillum minim duis. Commodo",
        img: "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "land rover defender",
        adet: 1,
        price: 200000,
        productDescription: "on numara alet mq",
        img: "https://www.kosifleroto.com.tr/blog/Contents/images/landroverdefender-ozellikler.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "2003 bel atlı boyalı civic",
        adet: 1,
        price: 5000,
        productDescription: "on numara alet mq",
        img: "https://i0.shbdn.com/photos/72/28/42/x5_11017228421sg.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "mercedes benz 600sel",
        adet: 1,
        price: 80000,
        productDescription: "on numara alet mq",
        img: "https://i0.shbdn.com/photos/55/20/00/x5_1073552000gdl.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "paul walker nissan gtr",
        adet: 1,
        price: 10000000,
        productDescription: "on numara alet mq",
        img: "https://4.bp.blogspot.com/-q0X2RHE3dcs/W_QYaXSpyVI/AAAAAAAALU8/VLnQyTaYV58Ut9OxbpKnToRCXCe5mK38gCLcBGAs/s640/nissan%2Bskyline%2Bgtr.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "lamborghini urus",
        adet: 1,
        price: 300000,
        productDescription: "on numara alet mq",
        img: "https://www.otokokpit.com/wp-content/uploads/2022/10/2023-lamborghini-urus-s-3.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "bentley continental",
        adet: 1,
        price: 800000,
        productDescription: "on numara alet mq",
        img: "https://cdn.motor1.com/images/mgl/wV2RV/s1/bentley-continental-gt-mulliner-coupe.webp",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "dominic toretto dodge charger",
        adet: 1,
        price: 10000000,
        productDescription: "on numara alet mq",
        img: "https://hips.hearstapps.com/hmg-prod/images/screen-shot-2019-07-12-at-2-06-23-pm-2-1562954848.png?crop=0.377xw:0.890xh;0.107xw,0.110xh&resize=1200:*",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
    ],
    erkek_giyim_Ürünler: [
      {
        id: uuidv4(),
        productName: "t-shirt",
        adet: 1,
        price: 250000,
        productDescription: "on numara alet mq",
        img: "https://cdn.dsmcdn.com/ty863/product/media/images/20230503/17/338529636/926097760/1/1_org_zoom.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "pantolon",
        adet: 1,
        price: 200000,
        productDescription: "on numara alet mq",
        img: "https://cdn.dsmcdn.com/ty489/product/media/images/20220726/21/150401509/136575834/1/1_org_zoom.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "ceket",
        adet: 1,
        price: 5000,
        productDescription: "on numara alet mq",
        img: "https://galeri0.uludagsozluk.com/28/polat-alemdar_22810.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "mont",
        adet: 1,
        price: 80000,
        productDescription: "on numara alet mq",
        img: "https://cdn.dsmcdn.com/ty669/product/media/images/20221230/18/249489258/300009898/1/1_org_zoom.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "alevli şort",
        adet: 1,
        price: 10000000,
        productDescription: "on numara alet mq",
        img: "https://cf.kizlarsoruyor.com/q5369233/primary-share.png?34",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "takım elbise",
        adet: 1,
        price: 300000,
        productDescription: "on numara alet mq",
        img: "https://i1.sndcdn.com/artworks-000143888339-ryvhy0-t500x500.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "spor atleti",
        adet: 1,
        price: 800000,
        productDescription: "on numara alet mq",
        img: "https://static.ticimax.cloud/30579/uploads/urunresimleri/buyuk/gymwolvesgymwolves-erkek-spor-atleti-i-7-45f0.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "ayakkabı",
        adet: 1,
        price: 10000000,
        productDescription: "on numara alet mq",
        img: "https://cdn.dsmcdn.com/ty32/product/media/images/20201215/18/38765122/119639494/0/0_org_zoom.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
    ],
    kadın_giyim_Ürünler: [
      {
        id: uuidv4(),
        productName: "t-shirt",
        adet: 1,
        price: 250000,
        productDescription: "on numara alet mq",
        img: "https://cdn.dsmcdn.com/ty900/product/media/images/20230523/12/356343882/897621685/1/1_org_zoom.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "pantolon",
        adet: 1,
        price: 200000,
        productDescription: "on numara alet mq",
        img: "https://cdn.dsmcdn.com/ty745/product/media/images/20230224/20/288729009/867680692/1/1_org_zoom.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "ceket",
        adet: 1,
        price: 5000,
        productDescription: "on numara alet mq",
        img: "https://cdn.dsmcdn.com/ty863/product/media/images/20230504/3/339054769/170207310/1/1_org_zoom.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "mont",
        adet: 1,
        price: 80000,
        productDescription: "on numara alet mq",
        img: "https://cdn.dsmcdn.com/ty193/product/media/images/20211011/21/145366733/260591431/1/1_org_zoom.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "tayt",
        adet: 1,
        price: 10000000,
        productDescription: "on numara alet mq",
        img: "https://cdn.dsmcdn.com/ty536/product/media/images/20220920/17/177501522/233312181/2/2_org_zoom.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "etek",
        adet: 1,
        price: 300000,
        productDescription: "on numara alet mq",
        img: "https://cdn.dsmcdn.com/ty887/product/media/images/20230516/21/350446901/859419803/3/3_org_zoom.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "spor atleti",
        adet: 1,
        price: 800000,
        productDescription: "on numara alet mq",
        img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQMuVYgb3JydWWRfyEZV-r9cKTKzWhbfe0a9K6EliqOnU-znO4ZjuGHDX_YwEgw_v2_XHwu2A_DwXgEAMkTufUzhY5rrQpGuHRjm0QMJptq&usqp=CAY",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
      {
        id: uuidv4(),
        productName: "ayakkabı",
        adet: 1,
        price: 10000000,
        productDescription: "on numara alet mq",
        img: "https://cdn.dsmcdn.com/ty691/product/media/images/20230117/16/260411096/676707502/1/1_org_zoom.jpg",
        images: [
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
          "https://cdn.motor1.com/images/mgl/y2PgRq/s1/2024-porsche-cayenne.jpg",
        ],
        tarih: "",
        yorumlar:[]
      },
    ],
  },
  Siparisler: [],
  istekListesi: [],
  eskiSiparisler: [],
  satın_Alınacak_Ürünler: [],
};

const urunSlice = createSlice({
  name: "urunler", //burada actions için isim belirliyoruz mesela bir ürün eklemek için bir sepete ekle reducer var bunun action ı urun/sepeteEkle olacak karışmaması için diğer şeylerle
  initialState, //burada hangi state kullancağımızı belirtiyoruz

  reducers: {
    sepeteEkle: (state, action) => {
      const urun = action.payload; //burada tıklanan ürünü seçiyoruz ve urun adındaki değişkene atıyoruz
      const SiparisIndex = state.Siparisler.findIndex(
        (siparis) => siparis.id === urun.id
      ); // burada seçilen urun gönderilmeden önce gönderileceği state içinde var olup olmadığına bakıcağız bunun için findIndex kullanıyoruz

      if (SiparisIndex !== -1) {
        //burada eğer varsa yani değer -1 değilse
        state.Siparisler = state.Siparisler.map(
          (
            siparis //her ürün için map fonksiyonu çalışıyor ve bütün dizide o ürün var mı yok mu bakılıyor  ve eşleşen veriler için işlemler yapılıyor
          ) =>
            siparis.id === urun.id
              ? { ...siparis, adet: siparis.adet + 1 }
              : siparis //ürünler arasından seçtiğimiz ürün bulunuyor ve adet değeri arttırılıyor çünkü ürün kendisi zaten state içinde var sadece adet değeri artırılıyor
        );
      } else {
        state.Siparisler.push(urun); //burada eğer ürün bulunanamaışsa Siparisler adlı state içinde direk seçtiğimiz  ürünün kendisini ekliyor state içine
      }
    },

    sepettenKaldır: (state, action) => {
      state.Siparisler = state.Siparisler.filter(
        (siparis) => siparis.id !== action.payload
      );
    },

    butonAdetArttır: (state, action) => {
      state.Siparisler = state.Siparisler.map((siparis) =>
        siparis.id === action.payload
          ? { ...siparis, adet: siparis.adet + 1 }
          : siparis
      );
    },

    butonAdetAzalt: (state, action) => {
      state.Siparisler = state.Siparisler.map((siparis) =>
        siparis.id === action.payload
          ? {
            ...siparis,
            adet: siparis.adet >= 1 ? siparis.adet - 1 : siparis.adet,
          }
          : siparis
      );
    },

    eskiSiparisEkle: (state, action) => {
      const siparis = state.Siparisler.find(
        (siparis) => siparis.id === action.payload
      );
      const yeniSiparis = { ...siparis, tarih: new Date().toISOString() };
      state.eskiSiparisler = [...state.eskiSiparisler, yeniSiparis];
    },

    siparisBittiButonSil: (state, action) => {
      state.Siparisler = state.Siparisler.filter(
        (siparis) => siparis.id !== action.payload
      );
    },

    istekListesineEkleButton: (state, action) => {
      const urunlerID = action.payload.id;

      const istekIndex = state.istekListesi.findIndex(
        (istek) => istek.id === urunlerID
      );

      if (istekIndex !== -1) {
        return { ...state };
      } else {
        state.istekListesi = [...state.istekListesi, action.payload];
      }
    },

    istekListesiSil: (state, action) => {
      state.istekListesi = state.istekListesi.filter(
        (istek) => istek.id !== action.payload
      );
    },

    satınAlıncaklarEkle: (state, action) => {
      state.Siparisler.forEach((siparisUrun) => {
        const urun = state.satın_Alınacak_Ürünler.find(
          (urun) => urun.id === siparisUrun.id
        );

        if (urun) {
          urun.adet += siparisUrun.adet;
        } else {
          state.satın_Alınacak_Ürünler.push(siparisUrun);
        }
      });
      state.Siparisler = [];
    },

    satınAlınacaklarSil: (state, action) => {
      state.satın_Alınacak_Ürünler = state.satın_Alınacak_Ürünler.filter(
        (urun) => urun.id !== action.payload
      );
    },

    ürünlerSatıldıStateBoşalt: (state, action) => {
      state.satın_Alınacak_Ürünler = [];
    },

    eskiSiparislereEkle2: (state, action) => {
      // İlk olarak satın alınacak ürünlerin üzerinde dönelim
      const yeniSiparisler = state.satın_Alınacak_Ürünler.map((siparis) => {
        // Her bir ürün için yeni bir obje oluşturalım ve tarih bilgisini ekleyelim
        return { ...siparis, tarih: new Date().toISOString() };
      });

      // Bu yeni siparişleri eski siparişlerin sonuna ekleyelim
      state.eskiSiparisler = [...state.eskiSiparisler, ...yeniSiparisler];
    },

    yorumEkle:  (state, action) => {
      for(let urunTuru in state.ürünler) {
        state.ürünler[urunTuru] = state.ürünler[urunTuru].map((urun) => {
          if (urun.id === action.payload.id) {
            return {
              ...urun,
              yorumlar: [...urun.yorumlar, action.payload.yorum]
            }
          } else {
            return urun;
          }
        });
      }
    }
    
    
  },
});

export const {
  sepeteEkle,
  sepettenKaldır,
  butonAdetArttır,
  butonAdetAzalt,
  eskiSiparisEkle,
  siparisBittiButonSil,
  istekListesineEkleButton,
  istekListesiSil,
  satınAlıncaklarEkle,
  satınAlınacaklarSil,
  ürünlerSatıldıStateBoşalt,
  eskiSiparislereEkle2,
  yorumEkle
} = urunSlice.actions;

export default urunSlice.reducer;
