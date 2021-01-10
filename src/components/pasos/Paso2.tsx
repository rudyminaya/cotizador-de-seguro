import React, { useState } from 'react'
import { DetallesPlanes } from '../planes/detalles-planes/DetallesPlanes'
import Migas from '../elementos-de-ayuda/migas/Migas'
import { TextoApoyo, Titulo } from '../elementos-de-ayuda/titulos/Titulos'
import './Paso2.scss'
import { PlanesBox } from '../planes/cajas-planes/PlanesBox'
import { InformacionAdicional } from '../planes/detalles-planes/mas-informacion/InformacionAdicional'
import { BotonCorreo, BotonSimple } from '../elementos-de-ayuda/boton/Botones'

const Paso2 = (props) => {
    const [indiceDePlanSeleccionado, setIndiceDePlanSeleccionado] = useState(0)
    const planes = [
        {
            id: '1',
            nombre: 'básico',
            mensualidad: '160',
            montoCobertura: '1',
            beneficios: [0, 1],
        },
        {
            id: '2',
            nombre: 'avanzado',
            mensualidad: '200',
            montoCobertura: '5',
            beneficios: [0, 1, 2, 3],
        },
        {
            id: '3',
            nombre: 'premium',
            mensualidad: '250',
            montoCobertura: '7',
            beneficios: [0, 1, 2, 3, 4],
        },
        {
            id: '4',
            nombre: 'full',
            mensualidad: '500',
            montoCobertura: '12',
            beneficios: [0, 1, 2, 3, 4, 5],
        },
    ]
    const beneficios = [
        {
            titulo: 'Lima',
            textoApoyo: '(zona de cobertura)',
        },
        {
            titulo: '+30 clínicas',
            textoApoyo: '(en red afiliada)',
        },
        {
            titulo: 'Médico a Domicilio',
            textoApoyo: '',
        },
        {
            titulo: 'Chequeos Preventivos',
            textoApoyo: '',
        },
        {
            titulo: 'Reembolso Nacional',
            textoApoyo: '',
        },
        {
            titulo: 'Reembolso Internacional',
            textoApoyo: '',
        },
    ]

    return (
        <div className="paso2">
            <Migas paso="2" />
            <Titulo tituloSimple="Elige " tituloEnfasis="tu protección" />
            <TextoApoyo textoApoyo="Selecciona tu plan de salud ideal" />
            <div className="paso2__planesdeSeguro">
                {planes.map((plan, indice) => {
                    return (
                        <PlanesBox
                            key={`plan-${indice}`}
                            estado={indiceDePlanSeleccionado === indice}
                            nombrePlan={plan.nombre}
                            precioPlan={plan.mensualidad}
                            onClick={() => setIndiceDePlanSeleccionado(indice)}
                        />
                    )
                })}
            </div>
            <div className="paso2__detallesdePlanes">
                <DetallesPlanes
                    listaDeBeneficios={beneficios}
                    {...planes[indiceDePlanSeleccionado]}
                />

                <InformacionAdicional />
            </div>
            <div className="paso2__botones">
                <BotonCorreo
                    className="paso2__botones--botonCorreo"
                    tituloBoton="enviar cotización por correo"
                />
                <BotonSimple
                    onClick={() => props.planElegido(indiceDePlanSeleccionado)}
                    tituloBoton="comprar plan"
                />
            </div>
        </div>
    )
}

export default Paso2
