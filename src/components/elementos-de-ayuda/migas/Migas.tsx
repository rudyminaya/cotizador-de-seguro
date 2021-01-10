import React from 'react'
import { AiOutlineLeftCircle } from 'react-icons/ai'
import './Migas.scss'

const Migas = (props) => {
    return (
        <div className="migas">
            <AiOutlineLeftCircle className="migas__backButton" />
            <span className="migas__tituloPasoEnfasis">{`Paso ${props.paso} `}</span>{' '}
            <span className="migas__tituloPasoSimple">de 7</span>
        </div>
    )
}

export default Migas
