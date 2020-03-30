import React from "react";
import styled from "styled-components";

const ProjectViewContainer = styled.div`
width: 90%;
height: 500px;
background-color: white;
display: grid;
grid-template-columns: 1fr 1fr;
`

const ProjectView = ({title, info, imageUrl}) => (
<ProjectViewContainer>
    <div>
    <h2>Title of the project</h2>
    <p>Title of the project</p>
    </div>
    <div>Image of the project</div>
</ProjectViewContainer>
)

export default ProjectView