import React from 'react'
import './Botones.scss'
import { FaAngleRight } from 'react-icons/fa'

export const BotonContinuar = (props) => (
    <button
        className="btn btn-primary botones"
        type="submit"
        disabled={props.disabled}>
        {props.tituloBoton}
        <FaAngleRight className="icono" />
    </button>
)
export const BotonSimple = (props) => (
    <button
        className="btn btn-primary botones"
        onClick={props.onClick}
        type="submit"
        disabled={props.disabled}>
        {props.tituloBoton}
    </button>
)
export const BotonRetorno = (props) => (
    <button className="btn btn-primary botonRetorno" type="button">
        {props.tituloBoton}
    </button>
)

export const BotonCorreo = (props) => (
    <button className="btn botonCorreo" type="button">
        {props.tituloBoton}
    </button>
)
