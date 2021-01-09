import React from 'react'
import { DetallesPlanes } from '../planes/detalles-planes/DetallesPlanes'
import Migas from '../elementos-de-ayuda/migas/Migas'
import { TextoApoyo, Titulo } from '../elementos-de-ayuda/titulos/Titulos'
import './Paso2.scss'
import { PlanesBox } from '../planes/cajas-planes/PlanesBox'
import { InformacionAdicional } from '../planes/detalles-planes/mas-informacion/InformacionAdicional'

const Paso2 = () => {
    return (
        <div className="paso2">
            <Migas paso="2" />
            <Titulo tituloSimple="Elige " tituloEnfasis="tu protección" />
            <TextoApoyo textoApoyo="Selecciona tu plan de salud ideal" />
            <div className="paso2__planesdeSeguro">
                <PlanesBox estado={true} nombrePlan="basico" precioPlan="160" />
                <PlanesBox
                    estado={false}
                    nombrePlan="avanzado"
                    precioPlan="200"
                />
                <PlanesBox
                    estado={false}
                    nombrePlan="premium"
                    precioPlan="250"
                />
                <PlanesBox estado={false} nombrePlan="full" precioPlan="500" />
            </div>
            <div className="paso2__detallesdePlanes">
                <DetallesPlanes />
                <InformacionAdicional />
            </div>
        </div>
    )
}

export default Paso2
