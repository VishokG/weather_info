import React from 'react'
import { Subtitle, Title } from '../../styled/MainInfo.styled';

const MainInfoTitle = (props: any) => {
    return (
        <div>
            <Title>
                {props.city}, {props.country}. Weather
            </Title>
            <Subtitle>
                As of {props.time}
            </Subtitle>
        </div>
    )
}

export default MainInfoTitle;