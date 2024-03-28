import React from 'react';
// import { useState, useEffect } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const CoursePage = ({ deleteCourse }) => {  
  const navigate = useNavigate();
  const { id } = useParams();
  const courses = useLoaderData();

  const onDeleteClick = (id) => { 
    const confirmDelete = window.confirm('Are you sure you want to delete this course?');
    if (!confirmDelete) 
      return;
    deleteCourse(id);
    navigate('/courses');
  };

  // const [courses, setCourses] = useState(null);
  // const [loading, setLoading] = useState(true);
// first method to fetch data
  // useEffect(() => {
  //   const fetchCourses = async () => {
  //     try {
  //       const res = await fetch(`/courses/courses/${id}`);
  //       const data = await res.json();
  //       setCourses(data);
  //     } catch (error) {
  //       console.log('Error fetching data :', error);
  //     } finally {
  //       setLoading(false);
  //     }     
  //   }
  //   fetchCourses();
  // } , []);
// second method to fetch data


return (
  <>
    <section>
      <div className='container m-auto py-6 px-6'>
        <Link
          to='/courses'
          className='text-indigo-500 hover:text-indigo-600 flex items-center'
        >
          <FaArrowLeft className='mr-2' /> Back to Job Listings
        </Link>
      </div>
    </section>

    <section className='bg-indigo-50'>
      <div className='container m-auto py-10 px-6'>
        <div className='grid grid-cols-1 md:grid-cols-70/30 w-full gap-6'>
          <main>
            <div className='bg-white p-6 rounded-lg shadow-md text-center md:text-left'>
              <div className='text-gray-500 mb-4'>{courses.type}</div>
              <h1 className='text-3xl font-bold mb-4'>{courses.topic}</h1>
              <div className='text-gray-500 mb-4 flex align-middle justify-center md:justify-start'>
                <FaMapMarker className='text-orange-700 mr-1' />
                <p className='text-orange-700'>{courses.location}</p>
              </div>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
              <h3 className='text-indigo-800 text-lg font-bold mb-6'>
                Course Description
              </h3>

              <p className='mb-4'>{courses.description}</p>

              <h3 className='text-indigo-800 text-lg font-bold mb-2'>
                Cost of Course
              </h3>

              <p className='mb-4'>{courses.price}</p>
            </div>
          </main>

      
          <aside>
            <div className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-xl font-bold mb-6'>Company Info</h3>

              <h2 className='text-2xl'>{courses.provider.name}</h2>

              <p className='my-2'>{courses.provider.description}</p>

              <hr className='my-4' />

              <h3 className='text-xl'>Contact Email:</h3>

              <p className='my-2 bg-indigo-100 p-2 font-bold'>
                {courses.provider.contactEmail}
              </p>

              <h3 className='text-xl'>Contact Phone:</h3>

              <p className='my-2 bg-indigo-100 p-2 font-bold'>
                {' '}
                {courses.provider.contactPhone}
              </p>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md mt-6'>
              <h3 className='text-xl font-bold mb-6'>Manage Courses</h3>
              <Link
                to={`/edit-course/${courses.id}`}
                className='bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
              >
                Edit Course
              </Link>
              <button
                onClick={() => onDeleteClick(courses.id)}
                className='bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block'
              >
                Delete Course
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  </>
);
};

const courseLoader = async ({ params }) => {
  const res =await fetch(`/courses/courses/${params.id}`);
  const data = await res.json();
  return data;
}

export {CoursePage as default, courseLoader}