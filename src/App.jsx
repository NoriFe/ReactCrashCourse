
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import CoursesPage from './pages/CoursesPage';
import ErrorPage from './pages/ErrorPage';
import CoursePage, { courseLoader } from './pages/CoursePage';
import AddCoursePage from './pages/AddCoursePage';

const addCourse =(newCourse) => {
  console.log('newCourse', newCourse);
}


const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements( 
    <Route path='/' element={< MainLayout />}>,
      <Route index element={< HomePage />} />
      <Route path='/courses' element={< CoursesPage />} />
      <Route path='/add-course' element={< AddCoursePage addCourseSubmit={addCourse}/>} />
      <Route path='/courses/:id' element={< CoursePage />} loader={courseLoader} />
      <Route path='*' element={< ErrorPage />} />
     
    </Route>
    )
  
  );
  return <RouterProvider router={router}/>  
  
};

export default App