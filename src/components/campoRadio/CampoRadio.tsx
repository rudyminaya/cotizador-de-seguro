import React from 'react'
import './CampoRadio.scss'

export const CampoRadio = (props) => {
    return (
        <div className="campoRadio">
            <label className="campoRadio__etiqueta"><input className="campoRadio__radioBoton" type="radio" name={props.grupo} value={props.valor} />{props.etiqueta}</label><br />
        </div>
    )
}
