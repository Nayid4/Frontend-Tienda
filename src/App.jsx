/* eslint-disable react/jsx-no-target-blank */
import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import Home from "./Pages/Home"
import { Box } from '@mui/material'

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
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
