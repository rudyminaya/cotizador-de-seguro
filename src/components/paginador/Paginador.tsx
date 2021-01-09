import React from 'react'
import Informacion from '../informacion/Informacion'
import './Paginador.scss'
import Login from '../login/Login'
import Paso1 from '../pasos/Paso1'
import Paso2 from '../pasos/Paso2'

const Paginador = () => {
    return (
        <div className="entornoDelPaginador">
            <div>
                <Informacion />
            </div>

            <div>
                <Paso2 />
            </div>
        </div>
    )
}
export default Paginador
