import React from 'react'
import styled from 'styled-components'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

const ArrowForwardContainer = styled.div`
width: 100px;
height: 80px;
background-color:blue;
display: flex;
justify-content: center;
align-items: center;
`

const ArrowForward = () => (<ArrowForwardContainer><ArrowForwardIcon fontSize="large"/></ArrowForwardContainer>)

export default ArrowForward