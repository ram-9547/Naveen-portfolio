import React from 'react'
import {BsFillPersonLinesFill, BsPhone} from 'react-icons/bs'
import { MdEmail } from 'react-icons/md';
const SocialMedia = () => {

const links=[
    {
        id:1,
        child:(
            <>
            Mobile: 
                        <BsPhone size={30}></BsPhone> 
            </>
        ),
        href:'tel:+91 9573802473',
        style:'rounded-tr-md'
    },
    {
        id:2,
        child:(
            <>
                 Email:
                        <MdEmail size={30}></MdEmail>
            </>
        ),
        href:'guntupallij.pegasion@gmail.com',
    },
    // {
    //     id:3,
    //     child:(
    //         <>
    //              Mail
    //                     <HiOutlineMail size={30}></HiOutlineMail> 
    //         </>
    //     ),
    //     href:'mail to:foo@gamil.com',
         
    // },
    {
        id:3,
        child:(
            <>
                 Resume
                        <BsFillPersonLinesFill size={30}></BsFillPersonLinesFill>
            </>
        ),
        href:'/RESUME.pdf',
        style:'rounded-br-md',
        // download:true,
    },
];

  return (
    <div class="hidden lg:flex flex-col top-[35%] left-0 fixed">
        <ul >
        
        {links.map(({id,child,href,style,download}) => (
            <li  key={id}
             class={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500"
              + " " + 
              style }>
                <a href={href} 
                class="flex justify-between items-center w-full text-white"
                download={download}
                 target='_blank'
                 rel="noreferrer"
                 >
        
                        {child}
                </a>
            </li>
        ))}

        </ul>
    </div>
  )
}

export default SocialMedia
