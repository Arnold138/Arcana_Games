import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/services.scss';
import { Link } from "react-router-dom";

/**
 * Composant Services - Présentation des services principaux
 * Murder Parties et Escape Games
 */
const Services = () => {
  const services = [
    {
      id: 1,
      title: "Murder Parties",
      subtitle: "Enquêtes criminelles immersives",
      description: "Transformez votre événement en véritable thriller. Vos invités deviennent détectives dans une intrigue captivante où chaque indice compte.",
      features: [
        "Scénarios originaux et personnalisés",
        "Acteurs professionnels",
        "Décors et accessoires inclus",
        "Durée adaptable (2h à 6h)"
      ],
      icon: "🔍",
      color: "red"
    },
    {
      id: 2,
      title: "Escape Games",
      subtitle: "Défis collaboratifs sur mesure",
      description: "Renforcez la cohésion d'équipe avec nos escape games personnalisés. Énigmes, puzzles et mystères à résoudre en équipe.",
      features: [
        "Énigmes adaptées à votre niveau",
        "Thèmes variés et originaux",
        "Équipes de 4 à 20 personnes",
        "Débriefing team-building"
      ],
      icon: "🗝️",
      color: "gold"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
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
    <section className="services">
      <div className="container">
        <motion.div
          className="services__header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="services__title">
            Nos <span className="text-gold">Expériences</span>
          </h2>
          <p className="services__subtitle">
            Des aventures sur mesure pour marquer les esprits
          </p>
        </motion.div>

        <motion.div
          className="services__grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`services__card services__card--${service.color}`}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="services__card-header">
                <div className="services__icon">{service.icon}</div>
                <div>
                  <h3 className="services__card-title">{service.title}</h3>
                  <p className="services__card-subtitle">{service.subtitle}</p>
                </div>
              </div>

              <p className="services__card-description">
                {service.description}
              </p>

              <ul className="services__features">
                {service.features.map((feature, index) => (
                  <li key={index} className="services__feature">
                    <span className="services__feature-icon">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <div className="services__card-footer">
                <motion.button
                  className="services__cta"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Correction ici : utilisation de service.id */}
                  <Link to={`/scenarios/${service.id}`} className="btn">
                    En savoir plus
                  </Link>
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
