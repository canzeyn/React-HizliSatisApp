/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'AçıkModeArkaPlanRengi':"	#F8F8F8",
        'AçıkModeArkaPlanRengi2':"#f0f8ff",

       
        'AçıkModeMenuArkaPlanRengi':"#e0ebeb",
        'AçıkModeMenuArkaPlanRengi2':"#f0ece2",
        'AçıkModeMenuArkaPlanRengi3':"#defcf9",
        'AçıkModeMenuArkaPlanRengi4':"#fff3ff",
        
        'DarkModeBaslıkRengi':'#407088',
        'DarkModeArkaPlanRengi':'#5c5470',
        'AçıkModeYazıRengi':'#6c5b7c',



        'ButonAçıkRenk':'#9192de',
        'ButonAçıkRenk2':'#f1e87d',
        'ButonKapalıRenk':'#006f8e'
      },
      screens:{
        'xs':"450px", //her satırda tek eleman  
        'sm':"600px", //her satırda 2 eleman
        'md':"890px", //her satırda 3 eleman 
        'lg':"1100px", // her satırda 4 eleman 
        'xl':"1400px", // her satırda 4 eleman ama araları daha açık 
        '2xl':"1536px" //her satırda 4 eleman ama araları çok açık 

      },
      borderRadius:{
        'lg':"35px",
        'md':'20px'
      }, 

      fontFamily:{
        custom: ['Helvetica', 'Arial', 'sans-serif'],
      },
      spacing:{
        'krediKartıSayfası':'600px',
        'numaraİnput':'558px',
        'numaraİnputSm':'490px',
        'numaraİnputXs':'370px',
        'satışButonSize':'410px',
        'yorumİnputGenişlik':'500px'
        
      }
      
    },
  },
  plugins: [],
}


