import React from 'react'
import styled from 'styled-components'
import ProjectView from '../project-view/project-view.component'

const BodyBlockContainer = styled.div`
width: 90vw;
max-width: 1140px;
height: 800px;
background-color: green;
margin:auto;
display: flex;
justify-content: center;
`

const BodyBlock = () => (
<BodyBlockContainer>
<ProjectView>
</ProjectView>
</BodyBlockContainer>)

export default BodyBlock