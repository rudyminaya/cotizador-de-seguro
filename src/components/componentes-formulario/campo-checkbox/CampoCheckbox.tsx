import React from 'react'
import './CampoCheckbox.scss'

export const CampoCheckbox = (props) => {
    return (
        <div className="terms">
            <input
                id={props.idTerms}
                onClick={props.onClick}
                type="checkbox"
                required
            />
            <label>
                {`${props.mensaje} `}
                <u>{props.mensajeEnlazado}</u>
            </label>
        </div>
    )
}
