import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import "./ProjectBox.css";

function ProjectBox({ projectPhoto, projectName }) {
  const desc = {
    TindogDesc:
      "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    TindogGithub: "https://github.com/",
    TindogWebsite: "https://devanshsahni.github.io/tindog/",

    TindogDesc:
      "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    TindogGithub: "https://github.com/",
    TindogWebsite: "https://devanshsahni.github.io/tindog/",

    TindogDesc:
      "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    TindogGithub: "https://github.com/",
    TindogWebsite: "https://devanshsahni.github.io/tindog/",

    TindogDesc:
      "This website is a landing page of Tinder but for dogs. It is a responsive website which was made to understand Bootstrap. I also learned how to host my project on Github and then how to deploy that project using Github pages.",
    TindogGithub: "https://github.com/",
    TindogWebsite: "https://devanshsahni.github.io/tindog/",
  };

  let show = "";
  if (desc[projectName + "Github"] === "") {
    show = "none";
  }

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a
          style={{ display: show }}
          href={desc[projectName + "Github"]}
          target="_blank"
        >
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Demo
          </button>
        </a>
      </div>
    </div>
  );
}

export default ProjectBox;
