import project from '../image/project.png'
import styled from 'styled-components';

const Image = styled.img`
border: 1px solid ;

`

const Projects = () => {
    return (
        <>
        <h2>Projects:</h2>
        <div className="project-img">
        <p><a href="https://github.com/ibrahimbio/E-Commerce-React-Project"><Image src={project} width="500" height="500" alt=""/></a></p>
        
        </div>
        </>
      );
}
 
export default Projects;