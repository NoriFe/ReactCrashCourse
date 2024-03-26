import React from 'react';
// import { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';

const CoursePage = () => {  
  const { id } = useParams();
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
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
    loading ? <Spinner /> : <h1>{ courses.topic }</h1> 
  )
};

const courseLoader = async ({ params }) => {
  const res =await fetch(`/courses/courses/${params.id}`);
  const data = await res.json();
  return data;
}

export {CoursePage as default, courseLoader}