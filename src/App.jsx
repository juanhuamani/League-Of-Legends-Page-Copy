import React from 'react';
import {createBrowserRouter , RouterProvider , Route , Outlet} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Colection from './pages/Colection';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

import './App.css'

const Layout = () =>{
  return (
    <>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path:"/champion",
        element:<Colection/>
      }
    ]
  },
  {
    path:"/register",
    element : <Register/>
  },
  {
    path:"/login",
    element : <Login/>
  }
])


function App() {
  return (
    <div className='app'>
      <div className='container-app'>
        <RouterProvider router={router}/>
      </div>
    </div>
  )
}

export default App
