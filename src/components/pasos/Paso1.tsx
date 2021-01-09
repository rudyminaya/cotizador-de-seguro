import React from 'react';
import CampoDocumento from '../campo-documento/CampoDocumento';
import { CampoTexto } from '../campo-Texto/CampoTexto';
import Migas from '../migas/Migas';
import './Paso1.scss';
import { Titulo, TextoApoyo } from '../titulos/Titulos'
import { CampoRadio } from '../campoRadio/CampoRadio';

const Paso1 = () => {
    return (
        <div>
            <div>
                <Migas />
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
                    <CampoTexto tipo="date" nombreEtiqueta="Fecha de Nacimiento" />
                </div>

                <TextoApoyo textoApoyo="Género" />

                <CampoRadio grupo="genero" valor="masculino" etiqueta="Masculino" />
                <CampoRadio grupo="genero" valor="femenino" etiqueta="Femenino" />

                <TextoApoyo textoApoyo="¿A quién vamos a asegurar" />

                <CampoRadio grupo="asegurado" valor="me" etiqueta="Solo a mí" />
                <CampoRadio grupo="asegurado" valor="me-familia" etiqueta="A mí y a mi familia" />

                <button type="submit" disabled>continuar </button>

            </form>
        </div>

    )
}
export default Paso1;