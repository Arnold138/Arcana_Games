import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/createexperience.scss"; 

const eventTypes = [
  { value: "murder", label: "Murder Party" },
  { value: "escape", label: "Escape Game" },
  { value: "autre", label: "Autre expérience personnalisée" },
];

const handleBooking = async () => {
  try {
     console.log('Réception réservation', req.body)
    const response = await fetch('http://localhost:5000/api/booking', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
       players,
    date,
    time,
    name,
    email,
    comment,
      })
    });
    if (response.ok) {
      alert("Votre réservation a bien été prise en compte. Un mail de confirmation vous a été envoyé.");
    } else {
      alert("Erreur lors de la réservation !");
    }
  } catch (error) {
    alert("Erreur réseau !");
  }
};


const CreateExperience = () => {
  const [form, setForm] = useState({
    eventType: eventTypes[0].value,
    players: 8,
    date: "",
    time: "",
    name: "",
    email: "",
    comment: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    console.log("Nouvelle expérience à créer :", form);

    try {
      const response = await fetch('http://localhost:5000/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      if (response.ok) {
        alert("Votre réservation a bien été prise en compte. Un mail de confirmation vous a été envoyé.");
      } else {
        alert("Erreur lors de la réservation !");
      }
    } catch (error) {
      alert("Erreur réseau !");
    }
  }

  return (
    <section className="create-experience">
      <div className="container">
        <motion.h2
          className="create-experience__title"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Créez votre expérience sur mesure
        </motion.h2>
        <motion.form
          className="create-experience__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <div className="form-group">
            <label>Type d'événement</label>
            <select
              name="eventType"
              value={form.eventType}
              onChange={handleChange}
            >
              {eventTypes.map((e) => (
                <option key={e.value} value={e.value}>
                  {e.label}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Nombre de joueurs</label>
            <input
              type="number"
              name="players"
              min={4}
              max={30}
              value={form.players}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Date</label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Heure</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Nom</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Votre nom"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Votre email"
            />
          </div>

          <div className="form-group">
            <label>Commentaires (optionnel)</label>
            <textarea
              name="comment"
              value={form.comment}
              onChange={handleChange}
              placeholder="Détaillez votre demande..."
            />
          </div>

          <motion.button
            type="submit"
            className="create-experience__btn"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            Créer mon expérience
          </motion.button>
        </motion.form>
        {submitted && (
          <motion.div
            className="create-experience__success"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Merci, votre demande a bien été envoyée ! 🎉
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CreateExperience;
