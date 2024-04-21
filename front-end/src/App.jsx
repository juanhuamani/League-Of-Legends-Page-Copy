import React from 'react';
import {createBrowserRouter , RouterProvider , Route , Outlet} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Champions from './pages/Champions';
import ChampionInfo from './pages/ChampionInfo';

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
        path:"/champions",
        element:<Champions/>,
      },
      {
        path:"/champions/:id",
        element:<ChampionInfo/>
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
