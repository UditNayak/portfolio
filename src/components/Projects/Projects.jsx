import ProjectBox from '../ProjectBox/ProjectBox';
import dog from '../../images/dog.png';
import Footer from '../Footer';
import './Projects.css';


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
          <Footer/>
        </div>
      )
}

export default Projects;