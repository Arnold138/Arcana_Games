import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/about.scss';
import CT from '../../public/images/carousel/1.webp';
const navigationItems = [
  { path: '/', label: 'Accueil' },
  { path: '/scenarios', label: 'Scénarios' },
  { path: '/about', label: 'Qui nous sommes ?' }, // <-- AJOUT
  { path: '/contact', label: 'Contact' }
];



const About = () => (
  <motion.main
    className="about-page"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    style={{ minHeight: "60vh", padding: "4rem 0 2rem 0" }}
  >

{/* Fond animé comme le Hero */}
<div className="about-page__background" />

{/* Particules flottantes du Hero - optimisées */}
<div className="about-page__hero-particles">
  {[...Array(15)].map((_, i) => (
    <div
      key={i}
      className="about-page__hero-particle"
      style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${15 + Math.random() * 5}s`
      }}
    />
  ))}
</div>


    <div className="container">
      <h1>Qui sommes-nous ?</h1>
      <img src={CT} alt="Agent C et T" className="about-page__image" />
      <p>
       
Qui sommes-nous ? Qui êtes-vous plutôt ? Ne vous êtes-vous jamais demandé si votre vie toute entière n'était que faite qu'une immense simulation informatique ? 
 Que vous êtes en vérité au centre d'un immense complot ? <br /> <br />C'est ce que les agents C et T vous proposent d'explorer à travers plusieurs jeux et énigmes centrés sur l'univers des théories du complot et des mystères inexpliqués.
  À travers des connaissances approfondies sur les sujets de l'espace, le temps et les jeux en loisirs indoor. Notre organisation est plus que capable de vous offrir l'expérience originale et captivante que vous recherchez. 
  Que ce soit pour vos amis, familles ou collègues.
      </p>
      <p>
        <strong>Arcana Games</strong> est une entreprise spécialisée dans la création d'expériences immersives et interactives, alliant jeux de rôle grandeur nature et enquêtes policières.
      </p>
      <p>
        Notre mission : rassembler, surprendre et faire vibrer nos participants à travers des jeux de rôle uniques, des décors réalistes et une animation personnalisée.
      </p>
      <p>
        <strong>Envie d’en savoir plus ou de nous contacter ?</strong> Rendez-vous dans l’onglet Contact ou suivez-nous sur nos réseaux !
      </p>
    </div>
  </motion.main>
);

export default About;
