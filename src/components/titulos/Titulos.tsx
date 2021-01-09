import React from 'react';
import './Titulos.scss'

const Titulos = (props) => {
    return (
        <div>
            <h1 className="tituloSimple">{props.tituloSimple}<span className="tituloSimple__enfasis">{props.tituloEnfasis}</span></h1>
            <h3 className="textoApoyo">{props.textoApoyo}</h3>
        </div>
    )
}
export default Titulos;