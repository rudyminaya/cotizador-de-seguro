import React, { useState } from 'react'
import CampoDocumento from '../componentes-formulario/campo-documento/CampoDocumento'
import { CampoTexto } from '../componentes-formulario/campo-Texto/CampoTexto'

import { TextoApoyo, Titulo } from '../elementos-de-ayuda/titulos/Titulos'

import './Login.scss'

const Login = (props) => {
    const [validaciones, setValidaciones] = useState({
        documento: false,
        fechaNacimiento: false,
        celular: false,
        terms1: false,
        terms2: false,
    })
    const validaCampo = (e) => {
        let campo = e.target
        switch (campo.id) {
            case 'nroDocumento':
                let patron = campo.getAttribute('pattern')
                let validador = RegExp(patron)
                let valor = campo.value
                if (valor.length > 0 && validador.test(valor)) {
                    setValidaciones({ ...validaciones, documento: true })
                    console.log('esta validado', valor, patron)
                } else {
                    setValidaciones({ ...validaciones, documento: false })
                    console.log(
                        'no está validado',
                        valor.length,
                        validador.test(valor)
                    )
                }
        }
    }
    return (
        <div className="contenedorPrincipalLogin">
            <Titulo tituloSimple="Obtén tu " tituloEnfasis="seguro ahora" />
            <TextoApoyo textoApoyo="Ingresa los datos para comenzar" />
            <div>
                <form className="formularioLogin">
                    <CampoDocumento onChange={validaCampo} />

                    <div className="formularioLogin__fechaNacimiento">
                        <input type="date" required />
                        <label>Fecha de Nacimiento</label>
                    </div>

                    <CampoTexto tipo="tel" nombreEtiqueta="Celular" />

                    <div className="formularioLogin__terms">
                        <input type="checkbox" required />
                        <label>
                            Acepto la
                            <u>
                                Política de Protección de Datos Personales y los
                                Términos y Condiciones
                            </u>
                        </label>

                        <input type="checkbox" required />
                        <label>
                            Acepto la
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
