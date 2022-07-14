import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Inicio = () => {

  const {usuario, setUsuario} = useContext(PruebaContext)

  return (
    <div>
      <h1>Inicio</h1>
      <p>Pagina de inicio</p>
      <p>Nombre: {usuario.nombre} {usuario.web}</p>
      <p>Web: {usuario.web}</p>
      {/* <p>Valor compartido: <strong>{compartida.titulo}</strong></p> */}
    </div>
  )
}
