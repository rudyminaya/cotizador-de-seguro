import React from 'react'
import { ItemBeneficio } from './ItemBeneficio'

export const ListaBeneficios = () => {
    return (
        <div>
            <ItemBeneficio
                estado={true}
                beneficio="Lima "
                infoAdicional="(zona de cobertura)"
            />
            <ItemBeneficio
                estado={true}
                beneficio="+30 clínicas "
                infoAdicional="(en red afiliada)"
            />
            <ItemBeneficio estado={false} beneficio="Médico a Domicilio " />
            <ItemBeneficio estado={false} beneficio="Chequeos preventivos" />
            <ItemBeneficio estado={false} beneficio="Reembolso nacional" />
            <ItemBeneficio estado={false} beneficio="Reembolso internacional" />
        </div>
    )
}
