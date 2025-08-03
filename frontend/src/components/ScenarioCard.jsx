import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import logo from '../assets/arcanalogo.png'

/**
 * Composant ScenarioCard - Carte d'affichage d'un scénario
 * @param {Object} scenario - Données du scénario
 * @param {Function} onReserve - Fonction à appeler quand on clique sur "Réserver ce scénario"
 */
const ScenarioCard = ({ scenario, onReserve }) => {
  const {
    title,
    description,
    duration,
    players,
    difficulty,
    category,
    image,
    highlights
  } = scenario;

  return (
    <motion.div
      className="scenario-card"
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="scenario-card__image">
        <img src={logo} alt={title} />
        <div className="scenario-card__category">{category}</div>
      </div>
      
      <div className="scenario-card__content">
        <h3 className="scenario-card__title">{title}</h3>
        <p className="scenario-card__description">{description}</p>
        
        <div className="scenario-card__info">
          <div className="scenario-card__info-item">
            <span className="scenario-card__info-label">Durée:</span>
            <span className="scenario-card__info-value">{duration}</span>
          </div>
          <div className="scenario-card__info-item">
            <span className="scenario-card__info-label">Joueurs:</span>
            <span className="scenario-card__info-value">{players}</span>
          </div>
          <div className="scenario-card__info-item">
            <span className="scenario-card__info-label">Difficulté:</span>
            <span className="scenario-card__info-value">{difficulty}</span>
          </div>
        </div>
        
        {highlights && (
          <ul className="scenario-card__highlights">
            {highlights.map((highlight, index) => (
              <li key={index} className="scenario-card__highlight">
                {highlight}
              </li>
            ))}
          </ul>
        )}
        
        <div className="scenario-card__footer">
          <Button variant="primary" size="md" onClick={onReserve}>
            Réserver ce scénario
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ScenarioCard;
