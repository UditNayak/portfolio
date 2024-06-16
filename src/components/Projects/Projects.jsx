import img1 from "../../images/img1.png";
import img2 from "../../images/img2.jpeg";
import img3 from "../../images/img3.webp";
import img4 from "../../images/img4.png";
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
        <ProjectBox projectPhoto={img1} projectName="ImageEditor" />
        <ProjectBox projectPhoto={img2} projectName="Aerofit" />
        <ProjectBox projectPhoto={img3} projectName="IndiaPAY" />
        <ProjectBox projectPhoto={img4} projectName="Scrape_N_Shop" />
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
