import React from 'react'
import { Main, Wrapper } from '../../styled/MainInfo.styled'
import BigField from './BigField'
import MainInfoTitle from './MainInfoTitle'


const MainInfo = (props: any) => {
    return (
        <Main>
            <Wrapper>
                <MainInfoTitle {...{city: props.city, country: props.country, time: props.time}}/>
                <BigField {...{temp: props.temp}}/>
            </Wrapper>
        </Main>
    )
}

export default MainInfo