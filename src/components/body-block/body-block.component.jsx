import React from 'react'
import styled from 'styled-components'
import ProjectView from '../project-view/project-view.component'

const BodyBlockContainer = styled.div`
width: 90vw;
max-width: 1140px;
height: 800px;
background-color: white;
margin:auto;
display: flex;
justify-content: center;
box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.5);
`

const BodyBlock = () => (
<BodyBlockContainer>
<ProjectView>
</ProjectView>
</BodyBlockContainer>)

export default BodyBlock