import React from 'react'
import styled from 'styled-components'

const TitleContainer = styled.div`
padding: 50px;
margin-left: 10vw;
position: absolute;
font-size: 2rem;
z-index: 5;
`

const Title = () => (
<TitleContainer>
    <h1><strong>Hey there</strong> this is <br />a title undestand</h1>
</TitleContainer>)

export default Title