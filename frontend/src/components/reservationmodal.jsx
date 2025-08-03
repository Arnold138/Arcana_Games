import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/reservationmodal.scss";

const ReservationModal = ({ isOpen, onClose, scenario }) => {
  // Bloque le scroll de la page quand la modale est ouverte
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    // Cleanup au démontage ou fermeture de la modale
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className="reservation-modal__overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className="reservation-modal__content"
          initial={{ scale: 0.92, y: 60, opacity: 0 }}
          animate={{ scale: 1, y: 0, opacity: 1 }}
          exit={{ scale: 0.9, y: 80, opacity: 0 }}
          onClick={e => e.stopPropagation()}
        >
          <button className="reservation-modal__close" onClick={onClose}>×</button>
          <h2>Réserver : {scenario?.title}</h2>
          <form>
            <div className="form-group">
              <label>Scénario</label>
              <input type="text" value={scenario?.title} readOnly />
            </div>
            <div className="form-group">
              <label>Nombre de joueurs</label>
              <input type="number" min={4} max={30} defaultValue={scenario?.players || 8} />
            </div>
            <div className="form-group">
              <label>Date</label>
              <input type="date" required />
            </div>
            <div className="form-group">
              <label>Heure</label>
              <input type="time" required />
            </div>
            <div className="form-group">
              <label>Nom</label>
              <input type="text" required placeholder="Votre nom" />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input type="email" required placeholder="Votre email" />
            </div>
            <button className="reservation-modal__submit">Réserver</button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ReservationModal;
