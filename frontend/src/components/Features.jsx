import React from 'react';
import { motion } from 'framer-motion';

/**
 * Composant Features - Avantages et points forts d'Arcana Games
 */
const Features = () => {
  const features = [
    {
      icon: "🎭",
      title: "Expérience Immersive",
      description: "Plongez dans des univers captivants avec nos décors, costumes et accessoires professionnels."
    },
    {
      icon: "👥",
      title: "Team Building",
      description: "Renforcez la cohésion de vos équipes grâce à nos activités collaboratives et stratégiques."
    },
    {
      icon: "⚡",
      title: "Sur Mesure",
      description: "Chaque scénario est adapté à votre groupe, vos objectifs et vos contraintes."
    },
    {
      icon: "🏆",
      title: "Qualité Premium",
      description: "Animateurs expérimentés et matériel professionnel pour une expérience mémorable."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="features">
      <div className="container">
        <motion.div
          className="features__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="features__item"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="features__icon">{feature.icon}</div>
              <h3 className="features__title">{feature.title}</h3>
              <p className="features__description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;