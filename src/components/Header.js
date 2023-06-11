import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoIosArrowDropdown } from "react-icons/io";

import Avatar from '@mui/material/Avatar';




const Header = () => {
  const [isOpen, setİsOpen] = useState(false);

  const toggleMenu = () => {
    setİsOpen(!isOpen);
  }

  //kategori material ui fonksiyon

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  //avatar material ui fonksiyon

  const [avatarEl, setAvatarEl] = React.useState(null);
  const open2 = Boolean(avatarEl);
  const handleClick2 = (event) => {
    setAvatarEl(event.currentTarget);
  };
  const handleClose2 = () => {
    setAvatarEl(null);
  };


  return (
    <header className="mb-2">
      <div style={{ backgroundImage: " linear-gradient(to right, #e4df96, #ffc79c, #feb6b5, #e3b1cd, #bab1d3)" }}>
        <div className=" flex flex-col md:flex-row text-2xl text-stone-500 md:flex justify-between items-center">


          <div className=" flex justify-start font-bold text-4xl text-stone-700 m-4 p-1 hover:text-white  hover:border-b-2 items-center"><Link to={"/"}>HızlıSatışApp</Link></div>


          <div className="justify-end items-center md:hidden">
            <lord-icon onClick={toggleMenu}
              src="https://cdn.lordicon.com/wgwcqouc.json"
              trigger="morph"
              colors="primary:#121331,secondary:#08a88a"
              style={{ width: "100px", height: "60px" }}>
            </lord-icon>
          </div>


          <div className={` flex-col md:flex-row ${isOpen ? 'flex' : 'hidden'} md:flex`}>

            <div className="m-2 p-1 flex items-center hover:text-white  hover:border-b-2"><Link to={"/wishList"}>İstek Listesi <lord-icon
              src="https://cdn.lordicon.com/hqrgkqvs.json"
              trigger="hover"
              colors="outline:#e940eb,primary:#ebe97f,secondary:#0c2375"
              style={{ width: "30px", height: "30px", paddingTop: "6px" }}>
            </lord-icon></Link></div>

            <div className="m-2 p-1 flex items-center hover:text-white  hover:border-b-2"><Link to={"/orders"}>Sepet <lord-icon
              src="https://cdn.lordicon.com/cllunfud.json"
              trigger="hover"
              colors="outline:#fea027,primary:#646e78,secondary:#ebe6ef"
              style={{ width: "30px", height: "30px", marginRight: "5px", paddingTop: "5px" }}>
            </lord-icon> </Link></div>

            <div className="m-2 p-1 flex items-center hover:text-white  hover:border-b-2"><Link to={"/previousOrders"}>Eski Siparişler  <lord-icon
              src="https://cdn.lordicon.com/jvihlqtw.json"
              trigger="hover"
              colors="primary:#121331,secondary:#0008ff"
              style={{ width: "30px", height: "30px", paddingTop: "7px" }}>
            </lord-icon></Link></div>


            {/* seçenekler butonu  */}
            <div className="flex items-center ml-2 mr-4 mb-3 md:mb-0">
              <Avatar className="bg-yellow-500 hover:bg-yellow-500 cursor-pointer" alt="CAN DENİZ" src="/static/images/avatar/1.jpg" onClick={handleClick2} 
               sx={{
                background:"radial-gradient(circle, rgba(218,148,203,1) 0%, rgba(233,230,15,1) 100%)"
               }}
              />
              <Menu
                sx={{
                  '& .MuiPaper-root': {
                    backgroundColor: 'rgba(0,0,0,0.6)', // Menu background color
                    borderRadius: '10px', // Rounded corners
                  },
                  '& .MuiListItem-root': {
                    '&:hover': {
                      backgroundColor: 'radial-gradient(circle, rgba(40,37,50,1) 0%, rgba(216,202,219,0.7917760854341737) 100%)', // Hover background color for each menu item
                    },
                  },
                }}
                id="simple-menu"
                anchorEl={avatarEl}
                keepMounted
                open={Boolean(avatarEl)}
                onClose={handleClose2}
              >
                <MenuItem className=" hover:text-purple-500 hover:border-b-2 hover:border-purple-500" onClick={handleClose}><Link className="text-white" to={"/satın_Alma_İslemleri"}>Satın Alma</Link></MenuItem>
                
              </Menu>
            </div>




            {/* material ui kategoriler butonu  */}

            <div className="md:hidden mb-3">
              <Button
                id="demo-positioned-button"
                aria-controls={open ? 'demo-positioned-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                sx={{
                  backgroundImage: "linear-gradient(308deg, rgba(237,231,231,1) 0%, rgba(136,156,198,1) 24%, rgba(45,105,166,1) 51%, rgba(104,11,108,1) 100%, rgba(203,112,65,0.13911502100840334) 100%, rgba(44,118,158,1) 100%)",
                  color: 'white',
                  marginLeft: '10px',


                }}
              >
                Kategoriler <IoIosArrowDropdown className="w-5 h-5 ml-1" />
              </Button>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}


              >
                <MenuItem onClick={handleClose}><Link className="text-amber-600  hover:text-purple-500 hover:border-b-8 hover:border-purple-500 font-semibold   border-stone-500 md:border-r-0 " to={"/teknoloji_Urunler"}>TEKNOLOJİ</Link></MenuItem>
                <MenuItem onClick={handleClose}> <Link className="text-amber-600 hover:text-purple-500 hover:border-b-2 hover:border-purple-500 font-semibold  border-stone-500 md:border-r-0   " to={"/ev_aleti_Urunler"}>EV-ALETLERİ</Link></MenuItem>
                <MenuItem onClick={handleClose}>  <Link className="text-amber-600  hover:text-purple-500 hover:border-b-2 hover:border-purple-500 font-semibold  border-stone-500 md:border-r-0 " to={"/yemek_Urunler"}>YEMEKLER</Link></MenuItem>
                <MenuItem onClick={handleClose}>  <Link className="text-amber-600 hover:text-purple-500 hover:border-b-2 hover:border-purple-500 font-semibold  border-stone-500 md:border-r-0  " to={"/araba_Urunler"}>ARABALAR</Link></MenuItem>
                <MenuItem onClick={handleClose}> <Link className="text-amber-600 hover:text-purple-500 hover:border-b-2 hover:border-purple-500 font-semibold  border-stone-500 md:border-r-0   " to={"/erkek_giyim_Urunler"}>ERKEK-GİYİM</Link></MenuItem>
                <MenuItem onClick={handleClose}> <Link className="text-amber-600 hover:text-purple-500 hover:border-b-2 hover:border-purple-500  font-semibold  border-stone-500 md:border-r-0 " to={"/kadın_giyim_Urunler"}>KADIN-GİYİM</Link></MenuItem>


              </Menu>


            </div>

          </div>

        </div>

      </div>

      <div className=" altmenü hidden md:flex sm:justify-evenly sm:mt-3 text-xl">
        <Link className="text-amber-600  hover:text-purple-500 hover:border-b-2 hover:border-purple-500 font-semibold  border-r-4 border-stone-500 md:border-r-0 " to={"/teknoloji_Urunler"}>TEKNOLOJİ</Link>
        <Link className="text-amber-600 hover:text-purple-500 hover:border-b-2 hover:border-purple-500 font-semibold border-r-4 border-stone-500 md:border-r-0   " to={"/ev_aleti_Urunler"}>EV-ALETLERİ</Link>
        <Link className="text-amber-600  hover:text-purple-500 hover:border-b-2 hover:border-purple-500 font-semibold border-r-4 border-stone-500 md:border-r-0 " to={"/yemek_Urunler"}>YEMEKLER</Link>
        <Link className="text-amber-600 hover:text-purple-500 hover:border-b-2 hover:border-purple-500 font-semibold border-r-4 border-stone-500 md:border-r-0  " to={"/araba_Urunler"}>ARABALAR</Link>
        <Link className="text-amber-600 hover:text-purple-500 hover:border-b-2 hover:border-purple-500 font-semibold border-r-4 border-stone-500 md:border-r-0   " to={"/erkek_giyim_Urunler"}>ERKEK-GİYİM</Link>
        {/* <Link className="text-amber-600 hover:text-purple-500 hover:border-b-2 hover:border-purple-500 font-semibold border-r-4 border-stone-500 md:border-r-0   " to={"/erkek_giyim_Urunler"}>ERKEK-GİYİM</Link> */}
        <Link className="text-amber-600 hover:text-purple-500 hover:border-b-2 hover:border-purple-500  font-semibold border-r-4 border-stone-500 md:border-r-0 " to={"/kadın_giyim_Urunler"}>KADIN-GİYİM</Link>
      </div>
    </header>
  )
}

export default Header