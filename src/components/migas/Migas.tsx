import React from 'react'
import { AiOutlineLeftCircle } from 'react-icons/ai'
import './Migas.scss'

const Migas = (props) => {
    return (
        <div className="breadcrumbs">
            <AiOutlineLeftCircle className="breadcrumbs__backButton" />
            <span className="breadcrumbs__tituloPasoEnfasis">{`Paso ${props.paso} `}</span>{' '}
            <span className="breadcrumbs__tituloPasoSimple">de 7</span>
        </div>
    )
}

export default Migas
