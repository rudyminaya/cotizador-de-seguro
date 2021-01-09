import React from 'react'
import './Botones.scss'
import { FaAngleRight } from 'react-icons/fa'

export const BotonContinuar = (props) => (
    <button className="btn btn-primary botonera" type="submit" disabled>
        {props.tituloBoton}
        <FaAngleRight className="icono" />
    </button>
)
export const BotonSimple = (props) => (
    <button className="btn btn-primary botonera" type="submit" disabled>
        {props.tituloBoton}
    </button>
)
