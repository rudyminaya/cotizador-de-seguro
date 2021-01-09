import React from 'react'
import './Titulos.scss'

export const Titulo = (props) => (
    <h1 className="tituloSimple">
        {props.tituloSimple}
        <span className="tituloSimple__enfasis">{props.tituloEnfasis}</span>
    </h1>
)
export const TextoApoyo = (props) => (
    <h3 className="textoApoyo">{props.textoApoyo}</h3>
)
export const TextoApoyoEnfasis = (props) => (
    <h3 className="textoApoyo__enfasis">{props.textoApoyoEnfasis}</h3>
)
