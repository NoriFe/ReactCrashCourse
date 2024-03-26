
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import CoursesPage from './pages/CoursesPage';
import ErrorPage from './pages/ErrorPage';
import CoursePage, { courseLoader } from './pages/CoursePage';


const router = createBrowserRouter(
  createRoutesFromElements( 
  <Route path='/' element={< MainLayout />}>,
    <Route index element={< HomePage />} />
    <Route path='/courses' element={< CoursesPage />} />
    <Route path='/courses/:id' element={< CoursePage />} loader={courseLoader} />
    <Route path='*' element={< ErrorPage />} />
  </Route>
  )

);

const App = () => {
  return <RouterProvider router={router}/>  
  
};

export default App