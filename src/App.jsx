
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import CoursesPage from './pages/CoursesPage';
import ErrorPage from './pages/ErrorPage';
import CoursePage, { courseLoader } from './pages/CoursePage';
import AddCoursePage from './pages/AddCoursePage';
import EditCoursePage from './pages/EditCoursePage';


const App = () => {
  // add new course
  const addCourse = async (newCourse) => {
    const response = await fetch('/courses/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCourse),
    });
    return;
  };

  // delete course
  const deleteCourse = async (id) => {
    const response = await fetch(`/courses/courses/${id}`, {
      method: 'DELETE'    
    });
    return;
  };
  
  const router = createBrowserRouter(
    createRoutesFromElements( 
    <Route path='/' element={< MainLayout />}>,
      <Route index element={< HomePage />} />
      <Route path='/courses' element={< CoursesPage />} />
      <Route path='/add-course' element={< AddCoursePage addCourseSubmit={addCourse}/>} />
      <Route path='/edit-course/:id' element={< EditCoursePage />} loader={courseLoader} />
      <Route path='/courses/:id' element={< CoursePage deleteCourse={deleteCourse}/>} loader={courseLoader} />
      <Route path='*' element={< ErrorPage />} />
     
    </Route>
    )
  
  );
  return <RouterProvider router={router}/>  
  
};

export default App