import React from 'react'
import './ItemBeneficio.scss'
import { FaHeart } from 'react-icons/fa'

export const ItemBeneficio = (props) => {
    return (
        <div className="itemBeneficio">
            <li
                className={`itemBeneficio__detalle--${
                    props.estado ? 'incluye' : 'excluye'
                }`}>
                <FaHeart
                    className={`itemBeneficio__icono--${
                        props.estado ? 'incluye' : 'excluye'
                    }`}
                />
                {props.beneficio}
                <span className="itemBeneficio__infoAdicional">
                    {props.infoAdicional}
                </span>
            </li>
        </div>
    )
}
