import React, { useEffect, useState } from 'react'
import CampoDocumento from '../componentes-formulario/campo-documento/CampoDocumento'
import { CampoTexto } from '../componentes-formulario/campo-Texto/CampoTexto'
import validator from 'validator'
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
    const [puedeContinuar, setPuedeContinuar] = useState(false)
    const [valoresGuardados, setValoresGuardados] = useState({
        documento: '',
        fechaNacimiento: '',
        celular: '',
        terms1: false,
        terms2: false,
    })

    const validaCampo = (e) => {
        let campo = e.target
        switch (campo.id) {
            case 'nroDocumento':
                let patron = campo.getAttribute('pattern')
                let validador = RegExp(patron)
                let valorDoc = campo.value
                setValoresGuardados({
                    ...valoresGuardados,
                    documento: valorDoc,
                })
                if (valorDoc.length > 0 && validador.test(valorDoc)) {
                    setValidaciones({ ...validaciones, documento: true })
                } else {
                    setValidaciones({ ...validaciones, documento: false })
                }
                break

            case 'fechaNacimiento':
                let valorFec = campo.value
                let fecValidada = validator.isDate(valorFec)
                setValoresGuardados({
                    ...valoresGuardados,
                    fechaNacimiento: valorFec,
                })
                setValidaciones({
                    ...validaciones,
                    fechaNacimiento: fecValidada,
                })
                break

            case 'nroCelular':
                let valorCel = campo.value
                valorCel = valorCel.replace(/ /g, '')
                let celValidada = validator.isMobilePhone(valorCel, 'es-PE')
                setValoresGuardados({ ...valoresGuardados, celular: valorCel })
                setValidaciones({ ...validaciones, celular: celValidada })
                break

            case 'terms1':
                setValoresGuardados({
                    ...valoresGuardados,
                    terms1: campo.checked,
                })
                setValidaciones({ ...validaciones, terms1: campo.checked })
                break

            case 'terms2':
                setValoresGuardados({
                    ...valoresGuardados,
                    terms2: campo.checked,
                })
                setValidaciones({ ...validaciones, terms2: campo.checked })
                break
        }
    }
    const formularioCompleto = (e) => {
        e.preventDefault()
        props.loginSuccess(valoresGuardados)
    }
    useEffect(() => {
        let valores = Object.values(validaciones)
        let algunaValidacionNoCumple = valores.includes(false)
        setPuedeContinuar(!algunaValidacionNoCumple)
    }, [validaciones])

    return (
        <div className="login">
            <Titulo tituloSimple="Obtén tu " tituloEnfasis="seguro ahora" />
            <TextoApoyo textoApoyo="Ingresa los datos para comenzar" />
            <div>
                <form onSubmit={formularioCompleto} className="formularioLogin">
                    <CampoDocumento onChange={validaCampo} />

                    <div className="formularioLogin__fechaNacimiento">
                        <input
                            id="fechaNacimiento"
                            onChange={validaCampo}
                            type="date"
                            required
                        />
                        <label>Fecha de Nacimiento</label>
                    </div>

                    <CampoTexto
                        id="nroCelular"
                        onChange={validaCampo}
                        tipo="tel"
                        nombreEtiqueta="Celular"
                    />

                    <div className="formularioLogin__terms">
                        <input
                            id="terms1"
                            onClick={validaCampo}
                            type="checkbox"
                            required
                        />
                        <label>
                            Acepto la 
                            <u>
                                Política de Protección de Datos Personales y los
                                Términos y Condiciones
                            </u>
                        </label>

                        <input
                            id="terms2"
                            onClick={validaCampo}
                            type="checkbox"
                            required
                        />
                        <label>
                            Acepto la 
                            <u>
                                Política de Envío de Comunicaciones Comerciales
                            </u>
                        </label>
                    </div>

                    <button
                        className="btn formularioLogin__enviar"
                        type="submit"
                        value="comencemos"
                        disabled={!puedeContinuar}>
                        Comencemos
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
