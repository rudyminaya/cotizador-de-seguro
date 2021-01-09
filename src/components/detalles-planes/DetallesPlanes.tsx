import React from 'react'
import { Plan1 } from '../imagenes/Imagenes'
import './DetallesPlanes.scss'
import { FaHeart } from 'react-icons/fa'

export const DetallesPlanes = () => {
    return (
        /* Contenedor Principal */
        <main className="contenedorPrincipal">
            <h1 className="contenedorPrincipal__encabezado">
                Cuentas con estos beneficios:
            </h1>
            {/* Contenedor de Informacion */}
            <div className="contenedorInterno">
                <section className="contenedorInterno__resumenPlan">
                    <div>
                        <h3 className="contenedorInterno__resumenPlan--cobertura">
                            Cobertura Máxima
                        </h3>
                        <h1 className="contenedorInterno__resumenPlan--montoCobertura">
                            S/1MM
                        </h1>
                        <span className="rounded-pill contenedorInterno__resumenPlan--tipodePlan">
                            PLAN BÁSICO
                        </span>
                    </div>
                    <Plan1 className="contenedorInterno__resumenPlan--imagen" />
                </section>

                <section>
                    <li>
                        <FaHeart /> Lima <span>(zona de cobertura)</span>
                    </li>
                    <li>
                        <FaHeart /> +30 clínicas <span>(en red afiliada)</span>
                    </li>
                    <li>
                        <FaHeart /> Médico a domicilio
                    </li>
                    <li>
                        <FaHeart /> Chequeos preventivos
                    </li>
                    <li>
                        <FaHeart /> Reembolso Nacional
                    </li>
                    <li>
                        <FaHeart /> Reembolso internacional
                    </li>
                </section>
            </div>
        </main>
    )
}
