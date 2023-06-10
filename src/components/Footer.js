import React from 'react'
import { AiFillInstagram } from "react-icons/ai";
import { VscGithub } from "react-icons/vsc";


const Footer = () => {
  return (
    <div className="bg-zinc-800 p-2" style={{ marginTop: 'auto' }}>
      <p className="text-center flex justify-center text-lg font-medium text-white">sitenin tüm hakları saklıdır!  /canzeyn/ <button> <AiFillInstagram className="w-6 h-6 " /> </button> <button><VscGithub onClick={() => window.open('https://github.com/canzeyn', '_blank')} className="w-6 h-6" /> </button></p>
    </div>
  )
}

export default Footer