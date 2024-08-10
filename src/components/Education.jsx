import React from 'react'

const Education = () => {
  return (
    <div name="education"
    class="w-full h-auto bg-gradient-to-b from-gray-800 to-white text-black pt-20">
        <div class="max-w-screen-lg p-4 mx-auto flex flex-col justify-center h-full w-full">
            <div class="pb-8">
                <p class="text-4xl font-bold inline border-b-4 border-gray-500">
                Education</p>
            </div>
            <div class="pb-8">
              <p class="p-2"><span class="font-bold text-xl">Masters</span> <span className="float-right">2024 – present</span></p>
              <hr />
              <p class="p-2">Cumberland university</p>
            </div>
            <div class="pb-8">
              <p class="p-2"> <span class="font-bold text-xl">B.Tech in Mechanical Engineering</span> <span className="float-right">2014 – 2018</span></p>
              <hr />
              <p class="p-2">RVR & JC College Of Engineering<span className="float-right">Guntur</span></p>
              <p class="p-2">CGPA 7.96/10</p>
            </div>
            {/* <div class="pb-8">
              <p class="p-2"> <span class="font-bold text-xl">Intermediate education</span> <span className="float-right">2018</span></p>
              <hr />
              <p class="p-2">Sri chaitanya junior collage,College of intermediate <span className="float-right">Guntur</span></p>
              <p class="p-2">Percentage 71.9%</p>
            </div>
            <div class="pb-8">
              <p class="p-2"><span class="font-bold text-xl">Schooling</span> <span className="float-right">2016</span></p>
              <hr />
              <p class="p-2">Bhashyam eductional institutions,School <span className="float-right">Guntur</span></p>
              <p class="p-2">CGPA 8.2/10</p>
            </div> */}
        </div>
    </div>
  )
}

export default Education
