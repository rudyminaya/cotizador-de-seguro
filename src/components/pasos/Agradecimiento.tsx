import React from 'react'
import { BotonRetorno } from '../elementos-de-ayuda/boton/Botones'
import { Titulo } from '../elementos-de-ayuda/titulos/Titulos'
import './Agradecimiento.scss'

const Agradecimiento = () => {
    return (
        <div className="agradecimiento">
            <main className="agradecimiento__content">
                <Titulo
                    tituloSimple="¡Gracias por "
                    tituloEnfasis="confiar en nosotros!"
                />
                <h3 className="agradecimiento__texto">
                    Queremos conocer mejor la salud de los asegurados. Un asesor
                    <strong> se pondrá en contacto </strong>contigo en las
                    siguientes <strong>48 horas</strong>
                </h3>
                <div className="agradecimiento__boton">
                    <a href="https://www.rimac.com/salud/seguro-salud">
                        <BotonRetorno tituloBoton="IR A SALUD" />
                    </a>
                </div>
            </main>
        </div>
    )
}
export default Agradecimiento
