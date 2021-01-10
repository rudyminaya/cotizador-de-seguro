import React, { useEffect, useState } from 'react'
import Informacion from '../informacion/Informacion'
import './Paginador.scss'
import Login from '../login/Login'
import Paso1 from '../pasos/Paso1'
import Paso2 from '../pasos/Paso2'
import Agradecimiento from '../pasos/Agradecimiento'

const Paginador = () => {
    const [credenciales, setCredenciales] = useState(null)
    const [paso, setPaso] = useState(0)
    const [datosPersonales, setDatosPersonales] = useState({
        valores: null,
        continuar: false,
    })
    useEffect(() => {
        if (credenciales != null) {
            fetch(
                'https://freestyle.getsandbox.com/dummy/obtenerdatospersona',
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json',
                    },
                    body: '{}',
                }
            )
                .then((respuesta) => respuesta.json())
                .then((datosRespuesta) => {
                    setDatosPersonales({
                        valores: {
                            nroDocumento:
                                datosRespuesta.data.tercero.numDocumento,
                            nombres: datosRespuesta.data.tercero.nombres,
                            apellidoPaterno:
                                datosRespuesta.data.tercero.apellidoPaterno,
                            apellidoMaterno:
                                datosRespuesta.data.tercero.apellidoMaterno,
                            fechaNacimientoTitular:
                                datosRespuesta.data.tercero.fecNacimiento,
                            genero: datosRespuesta.data.tercero.sexo,
                        },
                        continuar: false,
                    })
                    setPaso(1)
                })
        }
    }, [credenciales])

    useEffect(() => {
        if (datosPersonales.continuar) {
            setPaso(2)
        }
    }, [datosPersonales])

    return (
        <div className="paginador">
            <div className="paginador__izquierda">
                <Informacion />
            </div>

            <div className="paginador__derecha">
                {paso === 0 && <Login loginSuccess={setCredenciales} />}
                {paso === 1 && (
                    <Paso1
                        modificadorDatosPersonales={setDatosPersonales}
                        datosPersonales={datosPersonales}
                    />
                )}
                {paso === 2 && <Paso2 />}
                {paso === 3 && <Agradecimiento />}
            </div>
        </div>
    )
}
export default Paginador
