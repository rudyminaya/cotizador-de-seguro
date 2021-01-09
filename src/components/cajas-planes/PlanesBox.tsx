import React from 'react'
import './PlanesBox.scss'

export const PlanesBox = (props) => (
    <div>
        <div
            className={`planbox__contenedor--${
                props.estado ? 'activo' : 'inactivo'
            }`}>
            <h6 className="planbox__nombrePlan">{props.nombrePlan}</h6>
            <h6 className="planbox__precioPlan">
                <span>s/</span>
                {props.precioPlan}
            </h6>
            <h6 className="planbox__periodoPlan">mensual</h6>
        </div>
    </div>
)
