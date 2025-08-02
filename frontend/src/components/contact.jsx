import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/contact.scss";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  console.log('➡️ Formulaire soumis ! Données :', form); // Log à chaque clic sur Envoyer

  try {
    const response = await fetch('http://localhost:5000/api/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    });
    console.log('➡️ fetch POST /api/messages lancé, statut :', response.status);

    if (response.ok) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
      console.log('✅ Message envoyé avec succès !');
    } else {
      alert("Erreur lors de l'envoi !");
      console.error('❌ Erreur API :', response.status, await response.text());
    }
  } catch (error) {
    alert("Erreur de connexion serveur !");
    console.error('❌ Erreur fetch ou réseau :', error);
  }
};

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <motion.h2
          className="contact-section__title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          Une question, une demande particulière ?
        </motion.h2>
        <motion.form
          className="contact-section__form"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.15 }}
        >
          <div className="form-group">
            <label>Nom</label>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="Votre nom"
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              placeholder="Votre email"
            />
          </div>
          <div className="form-group">
            <label>Votre question</label>
            <textarea
              name="message"
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Tapez votre message ici..."
            />
          </div>
          <motion.button
            className="contact-section__submit"
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Envoyer
          </motion.button>
        </motion.form>
        <AnimatePresence>
          {submitted && (
            <motion.div
              className="contact-section__modal"
              initial={{ opacity: 0, scale: 0.92, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 60 }}
            >
              Merci pour votre message ! On vous répondra très vite. 👋
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactSection;
