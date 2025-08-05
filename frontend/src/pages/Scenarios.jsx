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
      title: "Le Tueur aux Énigmes",
      description: "Un tueur en série insaisissable terrorise la région. La police piétine… et tout bascule : le coupable est parmi vous. Réunis pour une soirée, chaque joueur devient à la fois enquêteur et suspect. Indices cryptiques, faux-semblants et trahisons se multiplient : saurez-vous démasquer l'assassin avant qu'il ne frappe à nouveau ?",
      duration: "3h",
      players: "8-12",
      difficulty: "Intermédiaire",
      category: "Murder Party",
      image: "/api/placeholder/400/300",
      highlights: [
        "Huis clos intense et immersif",
        "Chaque joueur est suspect",
        "Indices cryptiques et trahisons",
        "Ambiance psychologique unique"
      ]
    },
    {
      id: 2,
      title: "Le Grand Complot",
      description: "Bienvenue dans l'ombre de l'organisation Arcana. Vous êtes conviés à intégrer un cercle secret, à condition de percer les mystères des plus grands complots mondiaux : manipulation, codex cachés, secrets d'État et énigmes à tiroirs. Serez-vous capables de séparer la vérité des fausses pistes et de prouver que vous méritez votre place parmi les conspirateurs ?",
      duration: "1h30",
      players: "4-8",
      difficulty: "Avancé",
      category: "Escape Game",
      image: "/api/placeholder/400/300",
      highlights: [
        "Univers conspirationniste immersif",
        "Énigmes historiques complexes",
        "Logique et coopération requises",
        "Secrets d'État à découvrir"
      ]
    },
    {
      id: 3,
      title: "Olympiades Déjantées",
      description: "Oubliez les jeux classiques : place aux Olympiades by Arcana, un défi sportif revisité pour déclencher fous rires et esprit d'équipe ! Affrontez-vous lors d'épreuves déjantées, de relais loufoques et de défis aussi improbables qu'endiablés. Ici, tout le monde repart gagnant : entre amis ou collègues, c'est la convivialité qui fait la loi.",
      duration: "3h",
      players: "8-20",
      difficulty: "Tous niveaux",
      category: "Olympiades",
      image: "/api/placeholder/400/300",
      highlights: [
        "Épreuves sportives déjantées",
        "Fous rires et convivialité garantis",
        "Perfect pour team building",
        "Souvenirs inoubliables assurés"
      ]
    }
  ];

  const filters = [
    { key: 'all', label: 'Tous les scénarios', className: '' },
    { key: 'Escape Game', label: 'Escape Games', className: 'escape-game' },
    { key: 'Murder Party', label: 'Murder Party', className: 'murder-party' },
    { key: 'Olympiades', label: 'Olympiades', className: 'olympiades' }
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
              } ${filter.className}`}
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
