import React from 'react'
import { Sub } from '../../styled/SubInfo.styled'
import SubComponent from './SubComponent'

const SubInfo = (props: any) => {
    return (
        <Sub>
            <SubComponent title={"High/Low"} value={`${props.temp.max}/${props.temp.min}`}/>
            <SubComponent title={"Wind"} value={props.wind}/>
            <SubComponent title={"Humidity"} value={props.humidity}/>
            <SubComponent title={"Wind Direction"} value={props.direction}/>
            <SubComponent title={"Pressure"} value={props.pressure}/>
            <SubComponent title={"Sunrise"} value={props.sunrise}/>
            <SubComponent title={"Visibility"} value={props.visibility}/>
            <SubComponent title={"Sunset"} value={props.sunset}/>
        </Sub>
    )
}

export default SubInfo