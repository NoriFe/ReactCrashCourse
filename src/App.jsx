
import { Route, Router, createBrowserRouter, createRoutesFromElements, routerProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HomeCards from './components/HomeCards';
import Courses from './components/Courses';
import ViewAllCourses from './components/ViewAllCourses';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route index element={<h1>my APP</h1>} />
  )

);

const App = () => {
  return <RouterProvider router={router}/>  
  
}

export default App