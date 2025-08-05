import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from './Button';
import '../../styles/hero.scss';

/**
 * Composant Hero - Section d'accueil principale
 * Contient le titre principal, description et CTA
 */
const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Effet de parallaxe au survol
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="hero">
      {/* Fond animé */}
      <div 
        className="hero__background"
        style={{
          transform: `translate(${mousePosition.x * 0.05}px, ${mousePosition.y * 0.05}px)`
        }}
      />
      
      {/* Particules flottantes */}
      <div className="hero__particles">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="hero__particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      <div className="container">
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 className="hero__title" variants={itemVariants}>
            Plongez dans l'univers mysterieux <br />   
            <span className="hero__title--accent"> d'Arcana Games</span>
            <br />
            <span className="hero__title--brand"></span>
          </motion.h1>

          <motion.p className="hero__description" variants={itemVariants}>
            Créateurs d'expériences immersives sur mesure pour entreprises et familles.
            Nos Murder Parties et Escape Games transforment vos événements en aventures
            inoubliables où mystère et stratégie se rencontrent.
          </motion.p>

         <motion.div className="hero__cta" variants={itemVariants}>
  <Link to="/experience">
  <Button variant="outline" size="lg">
      Découvrir nos scénarios
    </Button>
  </Link>
  <Link to="/scenarios">
    <Button variant="primary" size="lg">
      Créer votre expérience
    </Button>
  </Link>
  <Link to="/about">
    <Button variant="secondary" size="lg">
      Qui sommes nous ?</Button>
  </Link>
</motion.div>
        </motion.div>
      </div>
    </section>
  );
};
export default Hero;