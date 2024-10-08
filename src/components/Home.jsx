import React from 'react'
import {MdOutlineArrowForwardIos} from "react-icons/md";
import { Link } from 'react-scroll';
function Home() {
  return (
    <div name="home"
      class="h-screen w-full h-auto bg-gradient-to-b from-gray-800 to-white text-black">
      <div class="max-w-screen-lg  mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div class="flex flex-col justify-center h-full">
          <h2 class="text-4xl sm:text-7xl font-bold text-white">
            Sri Sai Naveen Vadlamudi
          </h2>
          <p class=" text-gray-500 py-4 max-w-md">
          </p>
          <div>

            <Link
             to="portfolio" 
             smooth 
             duration={500}
              class="group text-white text-xl w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Portfolio
              <span class="group-hover:rotate-90 duration-200">
                <MdOutlineArrowForwardIos size={25} class="ml-1"></MdOutlineArrowForwardIos>
              </span>
            </Link>
            {/* <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineArrowForwardIos size={25} className="ml-1" />
              </span>
            </Link> */}
          </div>
        </div>

        <div>
          {/* <img src={""} alt="my profile" class="rounded-2xl mx-auto w-2/3 md:w-full">
          </img> */}
        </div>
      </div>
    </div>
  );
}

export default Home
