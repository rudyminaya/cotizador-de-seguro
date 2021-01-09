import React from 'react'
import './CampoDocumento.scss'

const CampoDocumento = () => {
    return (
        <div className="campoDocumento">
            <select
                className="campoDocumento__dropdownDocuments"
                id="tipoDocumento"
                name="tipoDocumento"
            >
                <option value="dni">DNI</option>
            </select>

            <div className="campoDocumento__nroDocumento">
                <input type="text" pattern="[0-9]{8}" required />
                <label>Nro de Documento</label>
            </div>
        </div>
    )
}

export default CampoDocumento
