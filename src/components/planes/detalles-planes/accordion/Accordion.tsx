import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import './Accordion.scss'

export const Accordion = (props) => {
    return (
        <div>
            <div className="accordion" id={props.id}>
                <div className="accordion__contenedorAccordion">
                    <div
                        className="accordion__header"
                        id={`heading-${props.id}`}>
                        <h2 className="mb-0 accordion__columnas">
                            <button
                                className="accordion__titulo accordion-button collapsed"
                                data-toggle="collapse"
                                data-target={`#collapse-${props.id}`}
                                aria-expanded="true"
                                aria-controls={`collapse-${props.id}`}>
                                {props.tituloAccordion}
                            </button>
                            <FaAngleDown
                                className="accordion__icono collapsed"
                                data-toggle="collapse"
                                data-target={`#collapse-${props.id}`}
                                aria-expanded="true"
                                aria-controls={`collapse-${props.id}`}
                            />
                        </h2>
                    </div>
                    <div
                        id={`collapse-${props.id}`}
                        className="collapse accordion__textoColapsible collapsed"
                        aria-labelledby={`heading-${props.id}`}
                        data-parent={`#${props.id}`}>
                        <div className="card-body accordion__detalleyContenido">
                            {props.contenido}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
