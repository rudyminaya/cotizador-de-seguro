import React from 'react';

const Login = () => {
    return (
        <div>
            <div>
                <header>
                    <h1>Obtén tu <em>seguro ahora</em></h1>
                    <h3>Ingresa los datos para comenzar</h3>
                </header>
                <form>
                    <select id="tipoDocumento" name="tipoDocumento">
                        <option value="dni">DNI</option>
                    </select>

                    <label htmlFor="floatingInput nroDocumento">Nro de Documento</label>
                    <input id="floatingInput nroDocumento" type="text" pattern="{8}" required />

                    <label htmlFor="fechaNacimiento" />
                    <input id="floatingInput fechaNacimiento" placeholder="Fecha de nacimiento" type="date" required />

                    <input type="checkbox" id="terminosyCondiciones" />
                    <label htmlFor="terminosyCondiciones"> Acepto la <u>Política de Protección de Datos Personales y los Términos y Condiciones</u></label>

                    <input type="checkbox" id="politicaComunicaciones" />
                    <label htmlFor="politicaComunicaciones"> Acepto la <u>Política de Envío de Comunicaciones Comerciales</u></label>
                    <input type="submit" value="comencemos" />
                </form>
            </div>
        </div >
    );
}

export default Login;