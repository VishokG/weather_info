import styled from "styled-components";

export const Sub = styled.div`
    justify-content: space-between;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    margin: 50px auto;
    width: 70%;
    height: 400px;
    /* border:  black solid 1px; */
`

export const SubPart = styled.div`
    align-items: center;
    display: flex;
    justify-content: space-around;
    width: 45%;
    height: 50px;
    border-bottom:  dashed darkgray 3px;
`

interface StyledFieldProps {
    isKey: boolean
}

export const StyledField = styled.div<StyledFieldProps>`
    font-weight: ${p => p.isKey?800:500}
`