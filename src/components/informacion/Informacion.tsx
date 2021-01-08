import React from 'react';
import { Cash, Hospital, Mobile, Shield, Sombra } from '../imagenes/Imagenes';
import './Informacion.scss'

const Informacion = () => {
    return (
        <div className="contenedorInformacion">
            <Sombra className="contenedorInformacion__sombra" />
            <main>
                <h1 className="contenedorInformacion__tituloInfo">Seguro de</h1>
                <h1 className="contenedorInformacion__tituloInfo--enfasis">Salud</h1>
                <li className="contenedorInformacion__features"><Shield className="contenedorInformacion__features--icono" />Cómpralo de manera fácil y rápida</li>
                <li className="contenedorInformacion__features"><Mobile className="contenedorInformacion__features--icono" />Cotiza y compra tu seguro 100% digital</li>
                <li className="contenedorInformacion__features"><Cash className="contenedorInformacion__features--icono" />Hasta S/.12 millones de cobertura anual</li>
                <li className="contenedorInformacion__features"><Hospital className="contenedorInformacion__features--icono" />Más de 300 clínicas en todo el Perú</li>
                <p className="contenedorInformacion__copyright">© 2021 RIMAC Seguros y Reaseguros</p>
            </main>
        </div>
    )
}

export default Informacion;