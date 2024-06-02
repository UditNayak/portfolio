import React from 'react';
import './Home.css';
import udit from './udit.png';
import Intro from '../Intro';
import Typing from '../Typing';

function Home() {
  return (
    <>
    <section className="home">
            <div className="home-text">
                <p>Hi There!</p>
                <h1>I'M <span className="name-highlight">Udit Kumar Nayak</span></h1>
                <Typing 
                text= {['Software Developer', 'Innovator', 'Player']}
                typingSpeed = {100}
                deletingSpeed = {60}
                duration = {1000}
                />
            </div>

            <div className="home-image">
                <img src={udit} alt="Udit's Image" />
            </div>
    </section>
    <Intro/>
    </>
  );
}

export default Home;