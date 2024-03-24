import React from 'react';
import Course from './Course';
import { useState, useEffect } from 'react';

const Courses = ({ isHome = false }) => { 
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => { 
    const fetchCourses = async () => {
    try {
      const res = await fetch('https://localhost:8000/courses');
      const data = await res.json();
      setCourses(data);
    } catch (error) {
      console.log('Error fetching data', error);
    } finally {
      setLoading(false);
    }     
  }
  fetchCourses();
  
}, []); 

  return (    
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
            <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            { isHome ? 'Recent Courses' : 'Browse All Courses' }
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {courseListing.map((course) => (
                    <Course key={course.id} courses={course} />
                ))}        
            </div>
        </div>
      </section>
    
  )
};

export default Courses