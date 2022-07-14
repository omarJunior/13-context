import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Contacto = () => {
  const {usuario} = useContext(PruebaContext)

  return (
    <div>
      <h1>Contacto</h1>
      <p>Pagina de Contacto</p>
      <p>Valor compartido en contacto: <strong>{JSON.stringify(usuario)}</strong></p>
      {/* <p>Valor compartido en contacto: <strong>{JSON.stringify(datoDesdeElContexto)}</strong></p> */}
    </div>
  )
}
