import React from 'react';
import Informacion from '../informacion/Informacion';
import './Paginador.scss'
import Login from '../login/Login';
import Paso1 from '../pasos/Paso1';

const Paginador = () => {
    return (
        <div className="entornoDelPaginador">
            <div>
                <Informacion />
            </div>

            <div>
                <Paso1 />
            </div>

        </div>
    )
}
export default Paginador;