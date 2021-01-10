import React, { useEffect, useState } from 'react'
import CampoDocumento from '../componentes-formulario/campo-documento/CampoDocumento'
import { CampoTexto } from '../componentes-formulario/campo-Texto/CampoTexto'
import Migas from '../elementos-de-ayuda/migas/Migas'
import './Paso1.scss'
import { Titulo, TextoApoyo } from '../elementos-de-ayuda/titulos/Titulos'
import { CampoRadio } from '../componentes-formulario/campoRadio/CampoRadio'
import { BotonContinuar } from '../elementos-de-ayuda/boton/Botones'
import validator from 'validator'

const Paso1 = (props) => {
    const [validaciones, setValidaciones] = useState({
        nombres: true,
        nroDocumento: true,
        apellidoPaterno: true,
        apellidoMaterno: true,
        fechaNacimientoTitular: true,
        genero: true,
        asegurado: false,
    })
    const [valoresGuardados, setValoresGuardados] = useState(
        props.datosPersonales.valores
    )
    const [puedeContinuar, setPuedeContinuar] = useState(false)
    const [radioMasculino, setRadioMasculino] = useState(null)
    const [radioFemenino, setRadioFemenino] = useState(null)
    const [radioSolo, setRadioSolo] = useState(null)
    const [radioFamilia, setRadioFamilia] = useState(null)

    const validaCampo = (e) => {
        let campo = e.target
        switch (campo.id) {
            case 'nombres':
                let valorNombre = campo.value
                setValoresGuardados({
                    ...valoresGuardados,
                    nombres: valorNombre,
                })
                setValidaciones({ ...validaciones, nombres: true })
                break
            case 'nroDocumento':
                let patron = campo.getAttribute('pattern')
                let valorDocumento = campo.value
                let validador = RegExp(patron)
                setValoresGuardados({
                    ...valoresGuardados,
                    nroDocumento: valorDocumento,
                })
                if (valorDocumento > 0 && validador.test(valorDocumento)) {
                    setValidaciones({
                        ...validaciones,
                        nroDocumento: true,
                    })
                } else {
                    setValidaciones({
                        ...validaciones,
                        nroDocumento: false,
                    })
                }
                break

            case 'apellidoPaterno':
                let valorPaterno = campo.value
                setValoresGuardados({
                    ...valoresGuardados,
                    apellidoPaterno: valorPaterno,
                })
                setValidaciones({
                    ...validaciones,
                    apellidoPaterno: true,
                })
                break

            case 'apellidoMaterno':
                let valorMaterno = campo.value
                setValoresGuardados({
                    ...valoresGuardados,
                    apellidoMaterno: valorMaterno,
                })
                setValidaciones({
                    ...validaciones,
                    apellidoMaterno: true,
                })
                break

            case 'fechaNacimientoTitular':
                let valorFec = campo.value
                let valorFecNacimiento = validator.isDate(valorFec)
                setValoresGuardados({
                    ...valoresGuardados,
                    fechaNacimientoTitular: valorFec,
                })
                setValidaciones({
                    ...validaciones,
                    fechaNacimientoTitular: valorFecNacimiento,
                })
                break

            case 'masculino':
            case 'femenino':
                let valorGenero = ''
                if (radioMasculino.checked) {
                    valorGenero = 'M'
                } else if (radioFemenino.checked) {
                    valorGenero = 'F'
                }
                setValoresGuardados({
                    ...valoresGuardados,
                    genero: valorGenero,
                })
                setValidaciones({
                    ...validaciones,
                    genero: radioMasculino.checked || radioFemenino.checked,
                })
                break

            case 'solo':
            case 'familia':
                let valorAsegurado = ''
                if (radioSolo.checked) {
                    valorAsegurado = 'solo'
                } else if (radioFamilia.checked) {
                    valorAsegurado = 'familia'
                }
                setValoresGuardados({
                    ...valoresGuardados,
                    asegurado: valorAsegurado,
                })

                setValidaciones({
                    ...validaciones,
                    asegurado: radioSolo.checked || radioFamilia.checked,
                })

                break
        }
    }
    const paso1Completado = (e) => {
        e.preventDefault()
        props.modificadorDatosPersonales({
            valores: valoresGuardados,
            continuar: true,
        })
    }

    useEffect(() => {
        let valores = Object.values(validaciones)
        let algunaValidacionNoCumple = valores.includes(false)
        setPuedeContinuar(!algunaValidacionNoCumple)
    }, [validaciones])

    return (
        <div>
            <div>
                <Migas paso="1" />
                <Titulo tituloSimple="Hola, " tituloEnfasis="Pepito" />
                <TextoApoyo textoApoyo="Valida que los datos sean correctos." />
            </div>
            <form className="formularioPaso1" onSubmit={paso1Completado}>
                <TextoApoyo textoApoyo="Datos personales del titular" />

                <div className="formularioPaso1__form">
                    <CampoDocumento
                        onChange={validaCampo}
                        value={valoresGuardados.nroDocumento}
                    />
                    <CampoTexto
                        value={valoresGuardados.nombres}
                        id="nombres"
                        tipo="texto"
                        nombreEtiqueta="Nombres"
                        onChange={validaCampo}
                    />
                    <CampoTexto
                        value={valoresGuardados.apellidoPaterno}
                        id="apellidoPaterno"
                        tipo="text"
                        nombreEtiqueta="Apellido Paterno"
                        onChange={validaCampo}
                    />
                    <CampoTexto
                        value={valoresGuardados.apellidoMaterno}
                        id="apellidoMaterno"
                        tipo="text"
                        nombreEtiqueta="Apellido Materno"
                        onChange={validaCampo}
                    />
                    <CampoTexto
                        value={valoresGuardados.fechaNacimientoTitular}
                        id="fechaNacimientoTitular"
                        tipo="date"
                        nombreEtiqueta="Fecha de Nacimiento"
                        onChange={validaCampo}
                    />
                </div>

                <TextoApoyo textoApoyo="Género" />

                <CampoRadio
                    checked={valoresGuardados.genero.toUpperCase() === 'M'}
                    grupo="genero"
                    campoId="masculino"
                    etiqueta="Masculino"
                    modificador={setRadioMasculino}
                    onChange={validaCampo}
                />
                <CampoRadio
                    checked={valoresGuardados.genero.toUpperCase() === 'F'}
                    grupo="genero"
                    campoId="femenino"
                    etiqueta="Femenino"
                    modificador={setRadioFemenino}
                    onChange={validaCampo}
                />

                <TextoApoyo textoApoyo="¿A quién vamos a asegurar" />

                <CampoRadio
                    grupo="asegurado"
                    campoId="solo"
                    etiqueta="Solo a mí"
                    modificador={setRadioSolo}
                    onChange={validaCampo}
                />
                <CampoRadio
                    grupo="asegurado"
                    campoId="familia"
                    etiqueta="A mí y a mi familia"
                    modificador={setRadioFamilia}
                    onChange={validaCampo}
                />
                <div className="formularioPaso1__botonEnviar">
                    <BotonContinuar
                        disabled={!puedeContinuar}
                        tituloBoton="continuar"
                    />
                </div>
            </form>
        </div>
    )
}
export default Paso1
