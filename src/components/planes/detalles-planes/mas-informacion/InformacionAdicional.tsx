import React from 'react'
import { Titulo } from '../../../elementos-de-ayuda/titulos/Titulos'
import { Accordion } from '../accordion/Accordion'

export const InformacionAdicional = () => {
    return (
        <div>
            <Titulo
                className="masInfo__tituloPresentacion"
                tituloSimple="Revisa nuestros"
            />
            <Titulo
                className="masInfo__tituloEnfasisPresentacion"
                tituloEnfasis="servicios y exclusiones"
            />
            <Accordion
                id="servicio1"
                tituloAccordion="Servicios brindados"
                contenido="Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Rerum, deserunt dicta nobis exercitationem
                            impedit illum. Harum ipsam, hic vel laboriosam aut,
                            nihil laborum cupiditate et culpa tempora
                            perspiciatis, veniam veritatis."
            />
            <Accordion
                id="servicio2"
                tituloAccordion="Exclusiones"
                contenido="Lorem ipsum dolor sit amet consectetur, adipisicing
                            elit. Rerum, deserunt dicta nobis exercitationem
                            impedit illum. Harum ipsam, hic vel laboriosam aut,
                            nihil laborum cupiditate et culpa tempora
                            perspiciatis, veniam veritatis."
            />
        </div>
    )
}
