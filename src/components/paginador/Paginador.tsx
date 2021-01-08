import React from 'react';
import Informacion from '../informacion/Informacion';
import './Paginador.scss'
import Login from '../login/Login';

const Paginador = () => {
    return (
        <div className="entornoDelPaginador">
            <div>
                <Informacion />
            </div>

            <div>
                <Login />
            </div>

        </div>
    )
}
export default Paginador;