// import React from "react";
// import keepsafe from "../assets/portfolio/keepsafe.png";
// import wayfinder from "../assets/portfolio/wayfinder.png"
// const Portflio = () => {
// const portfolios=[
// {
//     id:1,
//     src:keepsafe,
// },
// {
//     id:2,
//     src:wayfinder,
// },
// ];
//   return (
//     <div name="portfolio"
//     class="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
//         <div class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
//             <div class="p-8">
//                 <p class="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
//                 <p class="py-6">Check Out My work Right Now</p>
//             </div>

//             <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
//             { portfolios.map(({id,src}) =>(
//                 <div key={id} 
//                 class="shadow-md shadow-gray-600">
//                     <img src={src} alt="" class="rounded-md-duration-200 hover:scale-105"></img>
//                     <div class="flex items-center justify-center">
//                         <button class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Demo</button>
//                         <button class="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">Code</button>
//                     </div>
//                 </div>
//                 ))}

//                 </div>
//         </div>
//     </div>
//   )
// }

// export default Portflio


import React from "react";

const Portfolio = () => {
  // const portfolios = [
  //   {
  //     id: 1,
  //     src: keepsafe,
  //     demoLink: "https://suryavenkat1824.github.io/Keep-Safe/",
  //     codeLink: "https://github.com/suryavenkat1824/Keep-Safe",
  //   },
  //   {
  //     id: 2,
  //     src: wayfinder,
  //     demoLink: "https://way-finder-1824.netlify.app/",
  //     codeLink: "https://github.com/suryavenkat1824/WayFinder",
  //   },
  // ];

  return (
    <div name="portfolio" 
    className="w-full h-auto bg-gradient-to-b from-gray-800 to-white text-black pt-20">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="p-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Projects</p>
          <p className="py-6">Check Out My Work Right Now</p>
          <p className="py-6">
          <span class="font-bold text-xl">QUAD OFF ROADING VEHICLE</span> 
          <br /><br />● Business plan Member, Aesthetic Team Head, Suspension Team
          Member. 
          <br /><br />● JANUARY 2017 –JUNE 2017.
          <br /><br />● ORGANISER : Fraternity of Mechanical and Automotive Engineers(F.M.A.E)
          </p>
          <p className="py-6">
          <span class="font-bold text-xl">Tata Consultancy Services</span>
          <br /><br />● Designing components for use in high precision industrial equipments.
          <br /><br />● HYDERABAD 
          <br /><br />● 6-months
          </p>
          <p className="py-6">
          <span class="font-bold text-xl">Wipro Technologies Limited</span>
          <br /><br />● APMEA – CIO Project
          <br /><br />● Writing scalable code using Python programming language and developing the backend
          Components
          <br /><br />● Assessing and Prioritizing Client feature requests
          <br /><br />● Integrating the data storage solutions and based on the requirement given by the client testing
          the debugging the applications
          <br /><br />● Sholliganallur elcot sez, Chennai
          <br /><br />● 06/2019 – Present
          </p>
        </div>

        {/* <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demoLink, codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600">
              <img src={src} alt="" className="rounded-md-duration-200 hover:scale-105" />
              <div className="flex items-center justify-center">
                <a href={demoLink} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
                  Demo
                </a>
                <a href={codeLink} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Portfolio;
