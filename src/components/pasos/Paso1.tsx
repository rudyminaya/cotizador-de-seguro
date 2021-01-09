import React from 'react';
import Migas from '../migas/Migas';
import Titulos from '../titulos/Titulos';
import './Paso1.scss'

const Paso1 = () => {
    return (
        <div>
            <div>
                <Migas />
                <Titulos tituloSimple="Hola, " tituloEnfasis="Pepito" textoApoyo="Valida que los datos sean correctos" />
            </div>
            <form className="formularioPaso1">
                <Titulos textoApoyo="Datos personales del titular" />
                <div className="formularioPaso1__documentoTitular input-group mb-3">
                    <select className="btn btn-outline-secondary dropdown-toggle">
                        <option value="dni">DNI</option>
                    </select>
                    <input type="text" placeholder="Nombres" />
                </div>


                <label htmlFor="nroDocumentoTitular" />
                <input id="nroDocumentoTitular" type="text" pattern="{8}" placeholder="Nro de Documento" required />

                <label htmlFor="nombresTitular" />
                <input id="nombresTitular" type="text" />

                <label htmlFor="apellidosTitular" />
                <input id="apellidosTitular" type="text" />

                <label htmlFor="nacimientoTitular" />
                <input id="nacimientoTitular" type="date" />

                <h3>Género</h3>

                <input type="radio" id="masculino" name="genero" value="masculino" />
                <label htmlFor="masculino">Masculino</label>

                <input type="radio" id="Femenino" name="gender" value="Femenino" />
                <label htmlFor="Femenino">Femenino</label>

                <h3>¿A quién vamos a Asegurar?</h3>

                <input type="radio" id="me" name="me" value="me" />
                <label htmlFor="me">Solo a mí</label>

                <input type="radio" id="Femenino" name="gender" value="Femenino" />
                <label htmlFor="Femenino">A mí y a mi familia</label>
            </form>
        </div>

    )
}
export default Paso1;