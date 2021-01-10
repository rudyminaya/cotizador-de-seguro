import React from 'react'
import './CampoTexto.scss'

export const CampoTexto = (props) => {
    let fechaConvertida = props.value
    if (fechaConvertida) {
        fechaConvertida = props.value.split('/').reverse().join('-')
    }
    return (
        <div className="campoTexto">
            <input
                id={props.id}
                onChange={props.onChange}
                type={props.tipo}
                value={props.tipo === 'date' ? fechaConvertida : props.value}
                required
            />
            <label>{props.nombreEtiqueta}</label>
        </div>
    )
}
