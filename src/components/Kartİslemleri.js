import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { eskiSiparisEkle, satınAlınacaklarSil, ürünlerSatıldıStateBoşalt, eskiSiparislereEkle2 } from '../redux/urunlerSlice';
import { TextField } from '@mui/material';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
const Kartİslemleri = () => {



  const satınAlınacakÜrünler = useSelector((state) => state.urunler.satın_Alınacak_Ürünler)

  const dispatch = useDispatch(); //redux dispatch hook

  const navigate = useNavigate(); //react router dom navigate hook


  const [yönlendirdiktenSonra, setYönlendirdiktenSonra] = useState(false);
  const [mesajGöster, setMesajGöster] = useState(false);
  const [urunlereGitUyarı, setUrunlereGitUyarı] = useState(false)

  // material ui password fonksiyon

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const odenecekFiyat = satınAlınacakÜrünler ? satınAlınacakÜrünler.reduce((toplam, urun) => {
    return toplam + urun.price * urun.adet;
  }, 0) : 0;

  //satış işlemi sonucu için fonksiyon

  const handleBuy = () => {

    dispatch(eskiSiparislereEkle2())
    setMesajGöster(true);
    setTimeout(() => {

      dispatch(ürünlerSatıldıStateBoşalt())
      setYönlendirdiktenSonra(true);

    }, 3000)
  }

  useEffect(() => {
    if (yönlendirdiktenSonra) {
      navigate("/");
    }
  }, [yönlendirdiktenSonra])


  const ÜrünlereGitFonksiyon = () => {
    setUrunlereGitUyarı(true);
    setTimeout(() => {
      navigate('/teknoloji_Urunler');
      setUrunlereGitUyarı(false);

    }, 2000)
  }

  const ikiSayfaÖnceyeGit = () => {
    navigate(-2)
  }

  //formik için kodlar

  const initialValues = {
    ad: '',
    soyad: '',
    kartNumarası: '',
    cvv: '',
    şifre: ''
  };

  const validationSchema = Yup.object({
    ad: Yup.string().required('ad alanı zorunludur'),
    soyad: Yup.string().required('soyad alanı zorunludur'),
    kartNumarası: Yup.string().length(16, 'kart numarası 16 haneden oluşmalıdır').matches(/^[0-9]+$/, "Sadece sayı girilebilir.").required('kart alanı zorunludur'),
    cvv: Yup.string().matches(/^[0-9]+$/, "Sadece sayı girilebilir.").length(3, '3 haneden oluşur en fazla').required('cvv alanı zorunludur'),
    şifre: Yup.string().min(8, 'şifre en az 8 karakter içermeli').matches(/(?=.*[0-9])/, 'Şifre en az bir sayı içermelidir').matches(/(?=.*[A-Z])/, 'Şifre en az bir büyük harf içermelidir').required('şifre alanı zorunludur')
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
  })

  return (
    <div>

      <div className="text-center mt-5 mb-8">
        <h2 className="font-semibold text-5xl" style={{ color: "rgba(195, 83, 212, 0.441)" }}>İyi Alışverişler</h2>
      </div>

      {satınAlınacakÜrünler.length > 0 ? <div className="grid grid-rows-auto grid-cols-1 md:grid-cols-2 ">


        {/* Ürünler burada görüntülencek */}
        <div className="m-2">
          <div className="flex justify-evenly items-center border border-gray-200 p-4 rounded-lg"><p className="text-xl font-semibold">Ödenecek Fiyat: <span className="text-rose-500">{odenecekFiyat}$</span></p> <button onClick={ikiSayfaÖnceyeGit} className="text-white bg-gradient-to-r from-emerald-700 via-emerald-400 to-emerald-200 p-2 ml-3 rounded-2xl">alışverişe devam et</button></div>
          {satınAlınacakÜrünler.map((urun) => (
            <div key={urun.id} className="group border flex justify-center items-center w-auto  border-neutral-300 rounded-xl mt-3 p-3 ">
              <img className="hidden lg:inline-block sm:w-16 sm:h-16 md:w-32 md:h-32 sm:mr-2 md:mr-5 md:object-contain md:object-center md:mx-auto md:group-hover:scale-90  md:duration-1000" src={urun.img}></img>
              <h1 className=" text-sm text-center font-serif md:text-xl font-semibold uppercase text-zinc-500 mr-3" >ürün adı:<span className="text-rose-500">{urun.productName}</span></h1>
              <h1 className=" hidden md:inline-block  text-base text-center font-serif md:text-xl font-semibold uppercase text-zinc-500 mr-3" >ürün adet:<span className="text-rose-500">{urun.adet}</span></h1>
              <p className="text-center mr-3 uppercase font-medium">toplam fiyat: <span className="text-rose-500">{urun.price * urun.adet}$</span> </p>
              {/* <button className=" text-white hover:text-emerald-500  bg-gradient-to-r from-emerald-700 via-emerald-400 to-emerald-200 p-2 m-2 rounded-2xl hover:outline hover:outline-offset-1 hover:outline-emerald-400 hover:from-transparent hover:via-transparent hover:to-transparent" onClick={() => { dispatch(eskiSiparisEkle(urun.id)); dispatch(satınAlınacaklarSil(urun.id)) }}>siparis bitti</button> gerek kalmadı bu butona satın al ilmeinden sonra çalışıyor işlem */}

            </div>
          ))}
        </div>

        {/* kredi kartı bilgileri buradan alınacak */}



        <div className="krediKartıİşlemleri border hover:shadow-md hover:shadow-gray-500 border-gray-300 rounded-xl mr-2 mt-5 md:mt-0 ml-2 md:ml-5 ">
          <div>
            <h2 className="font-semibold text-3xl text-center">
              Kredi Kartı Bilgileriniz
            </h2>
          </div>

          <div>

            {/* kredi kartı bilgileri alınacak yerler */}
            <div className="krediKartıİnputları mt-5">


              <div className="flex flex-row space-x-2 justify-evenly">

                <TextField
                  className="basis-1/3"
                  id="ad"
                  name='ad'
                  label="Adınızı Giriniz..."
                  value={formik.values.ad}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.ad && Boolean(formik.errors.ad)}
                  helperText={formik.touched.ad && formik.errors.ad}
                />

                <TextField
                  className="basis-1/2"
                  id="soyad"
                  name='soyad'
                  label="Soyadınızı Giriniz..."
                  value={formik.values.soyad}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.soyad && Boolean(formik.errors.soyad)}
                  helperText={formik.touched.soyad && formik.errors.soyad}
                />

              </div>

              <div className="flex flex-row space-x-2 justify-center mt-5">

                <TextField
                  className="basis-numaraİnputXs mr-0 sm:m-3  sm:basis-numaraİnputSm lg:basis-numaraİnput"
                  id="kartNumarası"
                  name='kartNumarası'
                  label="Kart Numaranızı Giriniz..."
                  value={formik.values.kartNumarası}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.kartNumarası && Boolean(formik.errors.kartNumarası)}
                  helperText={formik.touched.kartNumarası && formik.errors.kartNumarası}
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />

              </div>

              <div className="flex flex-row  justify-evenly items-center mt-3">

                <FormControl className="basis-1/2" variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Sifreniz...</InputLabel>
                  <OutlinedInput
                    id="şifre"
                    name='şifre'
                    value={formik.values.şifre}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.şifre && Boolean(formik.errors.şifre)}
                    helperText={formik.touched.şifre && formik.errors.şifre}
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>

                <TextField
                  className="basis-1/3"
                  id="cvv"
                  name='cvv'
                  value={formik.values.cvv}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.cvv && Boolean(formik.errors.cvv)}
                    helperText={formik.touched.cvv && formik.errors.cvv}
                  label="CVV Giriniz..."
                />

              </div>


              <div className="flex flex-row justify-center items-center mt-5">
                <button onClick={handleBuy} className="text-white mb-3 hover:shadow-md hover:shadow-orange-600 hover:text-amber-500 bg-gradient-to-r from-amber-700 via-amber-400 to-amber-200 rounded-xl hover:bg-transparent hover:rounded-3xl hover:outline hover:outline-offset-1 hover:outline-amber-400 hover:from-transparent hover:via-transparent hover:to-transparent p-5 basis-56 xs:basis-satışButonSize text-xl font-medium">Satın Al</button>
              </div>


              {mesajGöster && <div className="fixed right-0 bottom-0"> <Alert severity="success">
                <AlertTitle>Satış İşlemi Başarılı</AlertTitle>
                Anasayfaya Yönlendiriliyorusunuz <strong>3sn</strong>
              </Alert> </div>}

            </div>

          </div>

        </div>

      </div> : <div className=" m-2   mt-5 flex justify-center items-center"><Alert severity="warning">
        <AlertTitle><span className="text-2xl">Uyarı</span></AlertTitle>
        <span className="text-xl">Satın Alınacak Ürün Yok! — </span><button onClick={ÜrünlereGitFonksiyon} className="text-xl bg-orange-50 hover:bg-orange-200  p-1 rounded-2xl">ürünlere git</button>
      </Alert></div>}

      {urunlereGitUyarı ? <div className="flex justify-center items-center mt-5">
        <Alert severity="info">

          ürünlere Gidiliyor <strong>2sn</strong>
        </Alert>
      </div> : ""}

    </div>
  )
}

export default Kartİslemleri