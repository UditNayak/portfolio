import dog from "../../images/dog.png";
import ProjectBox from "../ProjectBox/ProjectBox";
import Footer from "../Footer";
import "./Projects.css";

function Projects() {
  return (
    <div className="projectContainer">
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={dog} projectName="IndiaPAY" />
        <ProjectBox projectPhoto={dog} projectName="ImageEditor" />
        <ProjectBox projectPhoto={dog} projectName="Aerofit" />
        <ProjectBox projectPhoto={dog} projectName="Scrape_N_Shop" />
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
