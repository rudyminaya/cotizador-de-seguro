import React from 'react'
import './CampoRadio.scss'

export const CampoRadio = (props) => {
    return (
        <div className="campoRadio">
            <label htmlFor={props.campoId} className="campoRadio__etiqueta">
                <input
                    className="campoRadio__radioBoton"
                    type="radio"
                    id={props.campoId}
                    name={props.grupo}
                    value={props.campoID}
                />
                {props.etiqueta}
            </label>
            <br />
        </div>
    )
}
