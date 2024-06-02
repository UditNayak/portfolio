import ProjectBox from '../ProjectBox/ProjectBox';
import dog from '../../images/dog.png';


function Projects() {
    return (
        <div>
          <h1 className='projectHeading'>My <b>Projects</b></h1>
          <div className='project'>
          <ProjectBox projectPhoto={dog} projectName="Tindog" />
          <ProjectBox projectPhoto={dog} projectName="Tindog" />
          <ProjectBox projectPhoto={dog} projectName="Tindog" />
          <ProjectBox projectPhoto={dog} projectName="Tindog" />
          </div>
    
        </div>
      )
}

export default Projects;