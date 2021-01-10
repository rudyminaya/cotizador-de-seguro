import React from 'react'
import {
    Cash,
    Hospital,
    Mobile,
    Shield,
    Sombra,
} from '../elementos-de-ayuda/imagenes/'
import './Informacion.scss'

const Informacion = () => {
    return (
        <div className="informacion">
            <Sombra className="informacion__sombra" />
            <main>
                <h1 className="informacion__tituloInfo">Seguro de</h1>
                <h1 className="informacion__tituloInfo--enfasis">Salud</h1>
                <li className="informacion__features">
                    <Shield className="informacion__features--icono" />
                    Cómpralo de manera fácil y rápida
                </li>
                <li className="informacion__features">
                    <Mobile className="informacion__features--icono" />
                    Cotiza y compra tu seguro 100% digital
                </li>
                <li className="informacion__features">
                    <Cash className="informacion__features--icono" />
                    Hasta S/.12 millones de cobertura anual
                </li>
                <li className="informacion__features">
                    <Hospital className="informacion__features--icono" />
                    Más de 300 clínicas en todo el Perú
                </li>
                <p className="informacion__copyright">
                    © 2021 RIMAC Seguros y Reaseguros
                </p>
            </main>
        </div>
    )
}

export default Informacion
