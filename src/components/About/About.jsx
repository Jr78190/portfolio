import React from 'react';
import './About.css';  
import images from '../../data/images';

const About = () => {
    
  return (
    <main>
        <section className="about-all" id="about">
            <img src={images.Meliodas} className="photo-meliodas" alt="Meliodas" />
            <div className="about-text">
                <p> À Propos de moi </p>
                <h1>Je Suis</h1>
                <h2>Développeur Web </h2>
                <h3>
                Bonjour je m'appelle Jean-Rayan, Développeur web junior, reconverti depuis 2022, j'ai débuté à 
                <span> l'ETNA</span> en Bac+2 où j'ai acquis des bases solides en développement. En 2023, j'ai poursuivi 
                ma formation d'intégrateur web chez<span> OpenClassrooms </span> ce qui m'a permis de renforcer mes compétences,de m’auto-former sur de nouvelles technologies et de m’adapter rapidement à différents outils.
                À partir de Mars 2025, je reprendrai mes études en alternance en <span>Bachelor 3 "Concepteur de projets SI"</span> à l'ETNA.
                </h3>
            </div>
        </section>
    </main>

  );
}

export default About;