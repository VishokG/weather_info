import styled from "styled-components"

export const Inputs = styled.form`
    display: flex;
    width: 100%;
    margin-top: 45px;
    justify-content: space-around;
    margin-bottom: 45;
`
export const InputContainer = styled.div`

`

export const SubmitButton = styled.button.attrs(props => ({
    type: "submit"
}))`
    background-color: #446888;
    color: white;
    border-radius: 10px;
`