import React from 'react'
import { Big } from '../../styled/MainInfo.styled'

const BigField = (props: any) => {
    return (
        <Big>
            {props.temp}&#176;
        </Big>
    )
}

export default BigField