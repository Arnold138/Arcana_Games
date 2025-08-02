import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/about.scss';

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

<div className="about-page__particles">
  {[...Array(28)].map((_, i) => ( // Avant 14
    <div
      key={i}
      className="about-page__particle"
      style={{
        left: `${8 + Math.random() * 84}%`,
        top: `${Math.random() * 60}%`,
        animationDelay: `${Math.random() * 12}s`
      }}
    />
  ))}
</div>


    <div className="container">
      <h1>Qui sommes-nous ?</h1>
      <p>
        Arcana Games, c’est l’aventure humaine de Charly Marlier, passionné de scénarios immersifs, créateur de Murder Parties et Escape Games sur-mesure. Notre équipe conçoit chaque détail, chaque accessoire et chaque intrigue pour faire vivre à vos équipes ou à votre famille une expérience inoubliable.
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
