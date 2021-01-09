import React from 'react'
import CampoDocumento from '../componentes-formulario/campo-documento/CampoDocumento'
import { CampoTexto } from '../componentes-formulario/campo-Texto/CampoTexto'
import Migas from '../elementos-de-ayuda/migas/Migas'
import './Paso1.scss'
import { Titulo, TextoApoyo } from '../elementos-de-ayuda/titulos/Titulos'
import { CampoRadio } from '../componentes-formulario/campoRadio/CampoRadio'
import { BotonContinuar } from '../elementos-de-ayuda/boton/Botones'

const Paso1 = () => {
    return (
        <div>
            <div>
                <Migas paso="1" />
                <Titulo tituloSimple="Hola, " tituloEnfasis="Pepito" />
                <TextoApoyo textoApoyo="Valida que los datos sean correctos." />
            </div>
            <form className="formularioPaso1">
                <TextoApoyo textoApoyo="Datos personales del titular" />

                <div className="formularioPaso1__form">
                    <CampoDocumento />
                    <CampoTexto tipo="texto" nombreEtiqueta="Nombres" />
                    <CampoTexto tipo="text" nombreEtiqueta="Apellido Paterno" />
                    <CampoTexto tipo="text" nombreEtiqueta="Apellido Materno" />
                    <CampoTexto
                        tipo="date"
                        nombreEtiqueta="Fecha de Nacimiento"
                    />
                </div>

                <TextoApoyo textoApoyo="Género" />

                <CampoRadio
                    grupo="genero"
                    campoID="masculino"
                    etiqueta="Masculino"
                />
                <CampoRadio
                    grupo="genero"
                    campoID="femenino"
                    etiqueta="Femenino"
                />

                <TextoApoyo textoApoyo="¿A quién vamos a asegurar" />

                <CampoRadio
                    grupo="asegurado"
                    campoID="paraMi"
                    etiqueta="Solo a mí"
                />
                <CampoRadio
                    grupo="asegurado"
                    campoID="familiayYo"
                    etiqueta="A mí y a mi familia"
                />
                <div className="formularioPaso1__botonEnviar">
                    <BotonContinuar tituloBoton="continuar" />
                </div>
            </form>
        </div>
    )
}
export default Paso1
