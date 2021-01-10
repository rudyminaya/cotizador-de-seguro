import React from 'react'
import { Plan1, Plan2, Plan3, Plan4 } from '../../elementos-de-ayuda/imagenes/'
import './DetallesPlanes.scss'
import { ListaBeneficios } from './lista-beneficios/ListaBeneficios'

export const DetallesPlanes = (props) => {
    return (
        /* Contenedor Principal */
        <div>
            <main className="detallesPlanes__contenedor">
                <h1 className="detallesPlanes__encabezado">
                    Cuentas con estos beneficios:
                </h1>
                {/* Contenedor de Informacion */}
                <div className="detallesPlanes__contenedorInterno">
                    <section className="detallesPlanes__resumenPlan">
                        <div>
                            <h3 className="detallesPlanes__cobertura">
                                Cobertura Máxima
                            </h3>
                            <h1 className="detallesPlanes__montoCobertura">
                                {`S/${props.montoCobertura}MM`}
                            </h1>
                            <span className="rounded-pill detallesPlanes__tipodePlan">
                                {`plan ${props.nombre}`}
                            </span>
                        </div>
                        {props.id === '1' && (
                            <Plan1 className="detallesPlanes__imagen" />
                        )}
                        {props.id === '2' && (
                            <Plan2 className="detallesPlanes__imagen" />
                        )}
                        {props.id === '3' && (
                            <Plan3 className="detallesPlanes__imagen" />
                        )}
                        {props.id === '4' && (
                            <Plan4 className="detallesPlanes__imagen" />
                        )}
                    </section>

                    <section className="detallesPlanes__listaBeneficios">
                        <ListaBeneficios
                            seleccionados={props.beneficios}
                            beneficios={props.listaDeBeneficios}
                        />
                    </section>
                </div>
            </main>
        </div>
    )
}
