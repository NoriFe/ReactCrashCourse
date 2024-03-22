import React from 'react';
import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Course = ( { courses } ) => {

  const [showFullDescription, setShowFullDescription] = useState(false);

  let description = courses.description;

  if (!showFullDescription) {
    description = description.substring(0, 90) + ' ...';
  }
  return (
  <div className="bg-white rounded-xl shadow-md relative">
    <div className="p-4">
      <div className="mb-6">
        <div className="text-gray-600 my-2">{ courses.type }</div>
        <h3 className="text-xl font-bold">{ courses.topic }</h3>
      </div>

      <div className="mb-5">
          <div className="text-gray-600 my-2">{ courses.provider.name }</div>
          { description }
      </div>

      <button className ="text-indigo-500 mb-5 hover:text-indigo-600" onClick={ () => setShowFullDescription ((prevState) => !prevState)} > {showFullDescription ? 'Less' : 'More' }
        </button>

      <h3 className="text-indigo-500 mb-2">{ courses.price }</h3>

      <div className="border border-gray-100 mb-5"></div>

      <div className="flex flex-col lg:flex-row justify-between mb-4">
        <div className="text-orange-700 mb-3">
          <FaMapMarker className="inline-block text-lg mr-1 mb-1" />
          {  courses.location }
        </div>
        <Link
          to={ `/courses/${courses.id}` }
          className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-center text-sm"
        >
         Read More
        </Link>
      </div>
    </div>
  </div>                         
  )
}

export default Course