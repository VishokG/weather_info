import React from 'react'
import { SubPart } from '../../styled/SubInfo.styled';
import Field from './Field';

const SubComponent = (props: {
    title: string,
    value: string
}) => {
    return (
        <SubPart>
            <Field isKey={true} info={props.title} />
            <Field isKey={false} info={props.value} />
        </SubPart>
    )
}

export default SubComponent;