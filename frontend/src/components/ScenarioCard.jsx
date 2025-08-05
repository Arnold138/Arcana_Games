import React from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import logo from '../assets/arcanalogo.png';

const ScenarioCard = ({ scenario, onReserve }) => {
  const {
    title,
    description,
    duration,
    players,
    difficulty,
    category,
    highlights
  } = scenario;

  // Fonction pour déterminer la classe du bouton selon la catégorie
  const getButtonClass = (category) => {
    if (category === 'Escape Game') return 'escape-game';
    if (category === 'Murder Party') return 'murder-party';
    if (category === 'Olympiades') return 'olympiades';
    return '';
  };

  // Fonction pour déterminer la classe de la catégorie selon la catégorie
  const getCategoryClass = (category) => {
    if (category === 'Escape Game') return 'scenario-card__category--escape-game';
    if (category === 'Murder Party') return 'scenario-card__category--murder-party';
    if (category === 'Olympiades') return 'scenario-card__category--olympiades';
    return '';
  };

  // Fonction pour déterminer la classe de la card selon la catégorie
  const getCardClass = (category) => {
    if (category === 'Escape Game') return 'scenario-card--escape-game';
    if (category === 'Murder Party') return 'scenario-card--murder-party';
    if (category === 'Olympiades') return 'scenario-card--olympiades';
    return '';
  };

  return (
    <motion.div
      className={`scenario-card ${getCardClass(category)}`}
      whileHover={{ y: -10, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <div className="scenario-card__image">
        <img src={logo} alt={title} />
        <div className={`scenario-card__category ${getCategoryClass(category)}`}>{category}</div>
      </div>

      <div className="scenario-card__content">
        <h3 className="scenario-card__title">{title}</h3>
        <p className="scenario-card__description">{description}</p>

        <div className="scenario-card__info">
          <div className="scenario-card__info-item">
            <span className="scenario-card__info-label">Durée : </span>
            <span className="scenario-card__info-value">{duration}</span>
          </div>
          <div className="scenario-card__info-item">
            <span className="scenario-card__info-label">Joueurs : </span>
            <span className="scenario-card__info-value">{players}</span>
          </div>
          <div className="scenario-card__info-item">
            <span className="scenario-card__info-label">Difficulté : </span>
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
          <Button
            variant="primary"
            size="md"
            className={getButtonClass(category)} // Ajout de la classe dynamique
            onClick={onReserve}
          >
            Réserver ce scénario
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ScenarioCard;
