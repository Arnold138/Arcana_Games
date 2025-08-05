import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Features from '../components/Features';
import CreateExperience from '../components/createexperience';
import Contact from '../components/contact';
import Carousel from '../components/Carousel';

// Chemin correct pour Vite avec base URL
const images = Array.from({ length: 15}, (_, i) => `${import.meta.env.BASE_URL}images/carousel/${i + 1}.webp`);

const Home = () => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Carousel images={images} className="carousel-full" />
      <Services />
      <Features />
      <CreateExperience />
      <Contact />
    </motion.main>
  );
};

export default Home;