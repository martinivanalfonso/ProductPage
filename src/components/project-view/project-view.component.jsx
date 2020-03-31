import React from "react";
import styled from "styled-components";
import { connect } from 'react-redux'
import { selectDarkModeBackground } from '../../redux/header/header.selector'
import { createStructuredSelector} from 'reselect'

const ProjectViewContainer = styled.div`
width: 90%;
height: 500px;
background-color: ${props => props.darkMode};
display: grid;
grid-template-columns: 1fr 1fr;
`

const ProjectView = ({title, info, imageUrl, darkMode}) => (
<ProjectViewContainer darkMode={darkMode}>
    <div>
    <h2>Title of the project</h2>
    <p>Title of the project</p>
    </div>
    <div>Image of the project</div>
</ProjectViewContainer>
)


const mapStateToProps = createStructuredSelector({
    darkMode: selectDarkModeBackground
  })
  
  export default connect(mapStateToProps)(ProjectView);
  