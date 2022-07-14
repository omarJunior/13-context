import React from 'react'
import { 
    BrowserRouter, 
    Routes, 
    Route,
    NavLink,} from 'react-router-dom'
import { Acerca } from '../components/Acerca'
import { Articulos } from '../components/Articulos'
import { Contacto } from '../components/Contacto'
import { Inicio } from '../components/Inicio'
import { Login } from '../components/Login'

export const AppRouter = () => {
  return (
   <BrowserRouter>
    {/* Menu navegacion */}
    <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/inicio' element={<Inicio />} />
        <Route path='/articulos' element={<Articulos />} />
        <Route path='/acerca-de' element={<Acerca />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<div><h1>Esta pagina no existe 404</h1></div>}/>


    </Routes>
    {/* Footer */}
   </BrowserRouter>
  )
}
