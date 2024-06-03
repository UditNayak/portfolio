import udit from "./udit.png";
import "./Home.css";
import Intro from "../Intro";
import Typing from "../Typing";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <section className="home">
        <div className="home-text">
          <p>Hi There!</p>
          <h1>
            I'M <span className="name-highlight">Udit Kumar Nayak</span>
          </h1>
          <Typing
            text={["Software Developer", "AI/ML Enthusiast", "Gamer"]}
            typingSpeed={100}
            deletingSpeed={60}
            duration={1000}
          />
        </div>

        <div className="home-image">
          <img src={udit} alt="Udit's Image" />
        </div>
      </section>
      <Intro />
      <Footer />
    </>
  );
}

export default Home;
