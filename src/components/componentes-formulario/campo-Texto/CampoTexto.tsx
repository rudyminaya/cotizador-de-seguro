import React from 'react'
import './CampoTexto.scss'

export const CampoTexto = (props) => {
    return (
        <div className="campoTexto">
            <input type={props.tipo} required />
            <label>{props.nombreEtiqueta}</label>
        </div>
    )
}
