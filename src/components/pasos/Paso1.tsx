import React from 'react';
import Migas from '../migas/Migas';

const Paso1 = () => {
    return (
        <div>
            <div>
                <Migas />
                <h1>Hola, <em>Pepito</em></h1>
                <h3>Valida que los datos sean correctos</h3>
            </div>
            <form>
                <select id="tipoDocumento" name="tipoDocumento">
                    <option value="dni">DNI</option>
                </select>

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