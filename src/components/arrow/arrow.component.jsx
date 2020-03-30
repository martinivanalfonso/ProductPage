import React from 'react'
import styled from 'styled-components'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const ArrowContainer = styled.div`
width: 100px;
height: 80px;
background-color:blue;
display: flex;
justify-content: center;
align-items: center;
`
const Arrow = () => (<ArrowContainer><ArrowBackIcon fontSize="large"/></ArrowContainer>)

export default Arrow