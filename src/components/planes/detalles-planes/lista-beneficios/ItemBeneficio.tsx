import React from 'react'
import './ItemBeneficio.scss'
import { TiHeartFullOutline } from 'react-icons/ti'

export const ItemBeneficio = (props) => {
    return (
        <div className="itemBeneficio">
            <li
                className={`itemBeneficio__detalle--${
                    props.estado ? 'incluye' : 'excluye'
                } ${props.infoAdicional && 'itemBeneficio__detalle--enfasis'}`}>
                <TiHeartFullOutline
                    className={`itemBeneficio__icono--${
                        props.estado ? 'incluye' : 'excluye'
                    }`}
                />
                {`${props.beneficio} `}
                {props.infoAdicional && (
                    <span className="itemBeneficio__infoAdicional">
                        {props.infoAdicional}
                    </span>
                )}
            </li>
        </div>
    )
}
