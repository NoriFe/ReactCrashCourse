import React from 'react';
import Hero from '../components/Hero';
import HomeCards from '../components/HomeCards';
import Courses from '../components/Courses';
import ViewAllCourses from '../components/ViewAllCourses';

const HomePage = () => {
  return (
    <>
     <Hero />
     <HomeCards />
     <Courses />
     <ViewAllCourses />
    </>
  )
}

export default HomePage