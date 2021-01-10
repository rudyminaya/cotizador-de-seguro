import React from 'react'
import { ItemBeneficio } from './ItemBeneficio'

export const ListaBeneficios = (props) => {
    return (
        <div>
            {props.beneficios.map((cobertura, indice) => {
                return (
                    <ItemBeneficio
                        estado={props.seleccionados.includes(indice)}
                        beneficio={cobertura.titulo}
                        infoAdicional={cobertura.textoApoyo}
                    />
                )
            })}
        </div>
    )
}
