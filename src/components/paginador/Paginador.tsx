import React from 'react'
import Informacion from '../informacion/Informacion'
import './Paginador.scss'
import Login from '../login/Login'
import Paso1 from '../pasos/Paso1'
import Paso2 from '../pasos/Paso2'
import Agradecimiento from '../pasos/Agradecimiento'

const Paginador = () => {
    return (
        <div className="paginador">
            <div className="paginador__izquierda">
                <Informacion />
            </div>

            <div className="paginador__derecha">
                <Agradecimiento />
            </div>
        </div>
    )
}
export default Paginador
