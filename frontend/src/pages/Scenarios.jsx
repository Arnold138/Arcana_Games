import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScenarioCard from '../components/ScenarioCard';
import ReservationModal from '../components/reservationmodal'; // <--- AJOUTE CETTE LIGNE
import '../../styles/scenarios.scss';

/**
 * Page Scénarios - Affichage de tous les scénarios disponibles
 */
const Scenarios = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false); // <--- AJOUT
  const [selectedScenario, setSelectedScenario] = useState(null); // <--- AJOUT

  const scenarios = [
    {
      id: 1,
      title: "Le Mystère du Manoir Blackwood",
      description: "Une soirée élégante dans un manoir victorien se transforme en enquête criminelle quand l'hôte est retrouvé mort dans sa bibliothèque.",
      duration: "3-4h",
      players: "8-12",
      difficulty: "Intermédiaire",
      category: "Murder Party",
      image: "/api/placeholder/400/300",
      highlights: [
        "Décors d'époque authentiques",
        "Costumes victoriens fournis",
        "Intrigue complexe à rebondissements"
      ]
    },
    {
      id: 2,
      title: "Espionnage à Berlin",
      description: "Plongez dans l'univers de la guerre froide. Votre mission : infiltrer une réception diplomatique pour récupérer des documents secrets.",
      duration: "2-3h",
      players: "6-10",
      difficulty: "Avancé",
      category: "Murder Party",
      image: "/api/placeholder/400/300",
      highlights: [
        "Ambiance années 60",
        "Gadgets d'espionnage",
        "Scénario multi-niveaux"
      ]
    },
    {
      id: 3,
      title: "L'Énigme du Laboratoire",
      description: "Un scientifique a disparu de son laboratoire high-tech. Résolvez les énigmes technologiques pour découvrir la vérité.",
      duration: "1-2h",
      players: "4-8",
      difficulty: "Débutant",
      category: "Escape Game",
      image: "/api/placeholder/400/300",
      highlights: [
        "Énigmes technologiques",
        "Décor futuriste",
        "Perfect pour team building"
      ]
    },
    {
      id: 4,
      title: "Le Trésor des Pirates",
      description: "Embarquez pour une chasse au trésor épique. Déchiffrez les cartes anciennes et résolvez les énigmes pour trouver le butin.",
      duration: "2-3h",
      players: "6-15",
      difficulty: "Intermédiaire",
      category: "Escape Game",
      image: "/api/placeholder/400/300",
      highlights: [
        "Aventure en extérieur possible",
        "Énigmes créatives",
        "Récompenses surprises"
      ]
    }
  ];

  const filters = [
    { key: 'all', label: 'Tous les scénarios' },
    { key: 'Murder Party', label: 'Murder Parties' },
    { key: 'Escape Game', label: 'Escape Games' }
  ];

  const filteredScenarios = activeFilter === 'all' 
    ? scenarios 
    : scenarios.filter(scenario => scenario.category === activeFilter);

  // --- AJOUT FONCTIONS POUR MODALE ---
  const handleReserve = (scenario) => {
    setSelectedScenario(scenario);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedScenario(null);
  };
  // --- FIN AJOUT ---

  return (
    <motion.main
      className="scenarios-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <motion.div
          className="scenarios-page__header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="scenarios-page__title">
            Nos <span className="text-gold">Scénarios</span>
          </h1>
          <p className="scenarios-page__subtitle">
            Découvrez nos expériences immersives conçues pour captiver et surprendre
          </p>
        </motion.div>

        <motion.div
          className="scenarios-page__filters"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {filters.map((filter) => (
            <button
              key={filter.key}
              className={`scenarios-page__filter ${
                activeFilter === filter.key ? 'active' : ''
              }`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        <motion.div
          className="scenarios-page__grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {filteredScenarios.map((scenario) => (
            <ScenarioCard 
              key={scenario.id} 
              scenario={scenario} 
              onReserve={() => handleReserve(scenario)} // <--- AJOUT DE LA PROP
            />
          ))}
        </motion.div>
      </div>
      {/* MODALE EN DEHORS DU GRID */}
      <ReservationModal 
        isOpen={modalOpen}
        onClose={handleCloseModal}
        scenario={selectedScenario}
      />
    </motion.main>
  );
};

export default Scenarios;
