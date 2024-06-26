import "./About.css";
import Skills from "../Skills";
import Footer from "../Footer";

function About() {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>Udit Kumar Nayak</b> and I am from Bengaluru,
            India. I'm a <b>web developer</b> and a first year college student
            pursuing <b>BSc in CSE</b> from Scaler School of Technology. <br />
            <br />I have done an internship as a <b>Teaching Assistant</b> at
            Scaler School of Technology. I love the process of changing a raw
            idea into a website or a product that impacts lives. I want to do
            work that challenges me as a developer & work that I can be proud
            of.
          </p>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        <Skills skill="React" />
        <Skills skill="MongoDb" />
        <Skills skill="Javascript" />
        <Skills skill="Node" />
        <Skills skill="Express" />
        <Skills skill="Bootstrap" />
        <Skills skill="Figma" />
        <Skills skill="Git" />
        <Skills skill="Vercel" />
        <Skills skill="C++" />
        <Skills skill="Postman" />
        <Skills skill="Npm" />
        <Skills skill="Github" />
      </div>
      <Footer />
    </>
  );
}

export default About;
