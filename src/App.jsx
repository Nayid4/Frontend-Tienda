/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import { Box } from '@mui/material'
import About from "./Pages/About-us"
import SignIn from "./Pages/Sign-in"
import SignUp from "./Pages/Sign-up"
import Product from "./Pages/Products"

function App() {

  // Estado para saber si un usuario inicio sesion
  const [auth, setAuth] = useState({ 
    auth: false,
    userName: ""
  });

  // Funcion para cambiar el estado de actividad del cliente
  const cambiarEstadoAuth = (nuevoEstado) => {
    setAuth(nuevoEstado);
  };

  return (
    <Box>
      <Header  auth={auth} cambiarEstadoAuth={cambiarEstadoAuth}/> 
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about-us' element ={<About/>} />
        <Route path='/sign-in' element ={<SignIn/>} />
        <Route path='/sign-up' element ={<SignUp/>} />
        <Route path='/Hogar' element ={<Product props={{titulo:"Hogar"}}/>} />
        <Route path='/Tecnologia' element ={<Product props={{titulo:"Tecnologia"}}/>} />
        <Route path='/Moda' element ={<Product props={{titulo:"Moda"}}/>} />
        <Route path='/Accesorios' element ={<Product props={{titulo:"Accesorios"}}/>} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
