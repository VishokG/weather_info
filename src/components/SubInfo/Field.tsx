import React from 'react'
import { StyledField } from '../../styled/SubInfo.styled'

const Field = (props: {
    isKey: boolean,
    info: string
}) => {
    return (
        <StyledField isKey={props.isKey}>
            {props.info}
        </StyledField>
    )
}

export default Field