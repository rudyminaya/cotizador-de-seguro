import React from 'react'
import { ItemBeneficio } from './ItemBeneficio'

export const ListaBeneficios = (props) => {
    return (
        <div>
            {props.beneficios.map((cobertura, indice) => {
                return (
                    <ItemBeneficio
                        key={`beneficio-${indice}`}
                        estado={props.seleccionados.includes(indice)}
                        beneficio={cobertura.titulo}
                        infoAdicional={cobertura.textoApoyo}
                    />
                )
            })}
        </div>
    )
}
