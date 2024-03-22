import React from 'react'
import { Link } from 'react-router-dom'

const ViewAllCourses = () => {
  return (
    <section class="m-auto max-w-lg my-10 px-6">
    <Link
      to="/courses.html"
      class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
      >View All Courses</Link
    >
  </section>
  )
}

export default ViewAllCourses