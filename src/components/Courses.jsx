import React from 'react'
import courses from '../courses.json'
const Courses = () => {   
  return (
    <div>
        <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          Browse Jobs
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {courses.map((courses) => (
                  <div className="bg-white rounded-xl shadow-md relative">
                  <div className="p-4">
                    <div className="mb-6">
                      <div className="text-gray-600 my-2">{courses.type}</div>
                      <h3 className="text-xl font-bold">{ courses.topic}</h3>
                    </div>
      
                    <div className="mb-5">
                        <div className="text-gray-600 my-2">{courses.provider.name}</div>{courses.description}
                    </div>
      
                    <h3 className="text-indigo-500 mb-2">{courses.price}</h3>
      
                    <div className="border border-gray-100 mb-5"></div>
      
                    <div className="flex flex-col lg:flex-row justify-between mb-4">
                      <div className="text-orange-700 mb-3">
                        <i className="fa-solid fa-location-dot text-lg"></i>
                        {courses.location}
                      </div>
                      <a
                        href={`/courses/${courses.id}`}
                        className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                      >
                       Read More
                      </a>
                    </div>
                  </div>
                </div>
                ))}
         
        
          
         
          
         
        </div>
      </div>
    </section>
    </div>
  )
}

export default Courses