import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext'

export const Contacto = () => {
  const datoDesdeElContexto = useContext(PruebaContext)

  console.log(datoDesdeElContexto)

  return (
    <div>
      <h1>Contacto</h1>
      <p>Pagina de Contacto</p>
      <p>Valor compartido en contacto: <strong>{JSON.stringify(datoDesdeElContexto)}</strong></p>
    </div>
  )
}
