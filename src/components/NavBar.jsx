import React,{ useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa";
import { Link } from 'react-scroll';
const NavBar = () => {
const [nav,setNav]=useState(false);
    const links=[
        {
            id:1,
            link:'home'
        },
        {
            id:2,
            link:'about'
        },
        {
            id:3,
            link:'portfolio'
        },
        {
            id:4,
            link:'experience'
        },
        {
            id:5,
            link:'insights and resources'
        },
        {
            id:6,
            link:'contact'
        },
    ];
  return (
    <div class="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
        <h1 class="text-5xl font-signature ml-2">
            Naveen
        </h1>
        
        <ul class="hidden md:flex">
        {/* tailwind normal phone ke first anduke hidden(navbar kanpadadu ga phone lo drop down kottakunda) petti migatha pedda screens ki flex */}
       {links.map(({id,link})=>(
        <li key={id}
        class="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200">
                   <Link to={link} smooth duration={500}> {link}</Link>
                   </li>
          ))}
        </ul>

        <div onClick={()=>  setNav(!nav)}
        class="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
          {nav ? <FaTimes size={30}></FaTimes> : <FaBars size={30}></FaBars>}
          {/* click tho nav on and off */}
          {/* nav true aithe x ledante dropdown ala */}
        </div>
        {nav && (
    <ul class="flex flex-col justify-center  items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
    {links.map(({id,link})=>(
        <li key={id}
        class="px-4 cursor-pointer capitalize py-6 text-4xl">
                <Link onClick={()=>setNav(!nav)}
                to={link} smooth duration={500}> {link}</Link>
         </li>
          ))}
    </ul>
)}
    </div>
  )
}

export default NavBar