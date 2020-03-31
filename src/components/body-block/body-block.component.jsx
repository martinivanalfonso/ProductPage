import React from 'react'
import styled from 'styled-components'
import ProjectView from '../project-view/project-view.component'

import { connect } from 'react-redux'
import { selectDarkModeBackground } from '../../redux/header/header.selector'
import { createStructuredSelector} from 'reselect'


const BodyBlockContainer = styled.div`
width: 90vw;
max-width: 1140px;
height: 800px;
background-color: ${props => props.darkMode};
margin:auto;
display: flex;
justify-content: center;
box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.5);
box-shadow: -10px 10px 10px rgba(0, 0, 0, 0.5);
`

const BodyBlock = ({ darkMode }) => (
<BodyBlockContainer darkMode={darkMode} >
<ProjectView>
</ProjectView>
</BodyBlockContainer>)

const mapStateToProps = createStructuredSelector({
    darkMode: selectDarkModeBackground
  })
  
  export default connect(mapStateToProps)(BodyBlock);
  