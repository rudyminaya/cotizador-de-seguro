import React from 'react'
import CampoDocumento from '../componentes-formulario/campo-documento/CampoDocumento'
import { TextoApoyo, Titulo } from '../elementos-de-ayuda/titulos/Titulos'

import './Login.scss'

const Login = () => {
    return (
        <div className="contenedorPrincipalLogin">
            <Titulo tituloSimple="Obtén tu " tituloEnfasis="seguro ahora" />
            <TextoApoyo textoApoyo="Ingresa los datos para comenzar" />
            <div>
                <form className="formularioLogin">
                    <CampoDocumento />

                    <div className="formularioLogin__fechaNacimiento">
                        <input type="date" required />
                        <label>Fecha de Nacimiento</label>
                    </div>

                    <div className="formularioLogin__telefono">
                        <input type="tel" required />
                        <label>Celular</label>
                    </div>

                    <div className="formularioLogin__terms">
                        <input type="checkbox" required />
                        <label>
                            Acepto la{' '}
                            <u>
                                Política de Protección de Datos Personales y los
                                Términos y Condiciones
                            </u>
                        </label>

                        <input type="checkbox" required />
                        <label>
                            Acepto la{' '}
                            <u>
                                Política de Envío de Comunicaciones Comerciales
                            </u>
                        </label>
                    </div>

                    <button
                        className="formularioLogin__enviar"
                        type="submit"
                        value="comencemos">
                        Comencemos
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
