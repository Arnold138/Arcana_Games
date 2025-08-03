import React,{use,useState, useEffect} from "react";
import {ChevronRight} from 'lucide-react';
import { transform } from "framer-motion";
import '../../styles/carousel.scss';


import slide1 from '../assets/carousel/1.webp';
import slide2 from '../assets/carousel/2.webp';
import slide3 from '../assets/carousel/3.webp';
import slide4 from '../assets/carousel/4.webp';
import slide5 from '../assets/carousel/5.webp';
import slide6 from '../assets/carousel/6.webp';
import slide7 from '../assets/carousel/7.webp';
import slide8 from '../assets/carousel/8.webp';
import slide9 from '../assets/carousel/9.webp';
import slide10 from '../assets/carousel/10.webp';
import slide11 from '../assets/carousel/11.webp';
import slide12 from '../assets/carousel/12.webp';
import slide13 from '../assets/carousel/13.webp';
import slide14 from '../assets/carousel/14.webp';
import slide15 from '../assets/carousel/15.webp';


const images = [
  slide1, slide2, slide3, slide4, slide5,
  slide6, slide7, slide8, slide9, slide10,
  slide11, slide12, slide13, slide14, slide15
];


const Carousel = ({images}) => { 
    // on déclare l'état current pour savoir quelle image est affichée
    const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent(current === 0 ? images.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === images.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="carousel"> 
      <button className="carousel-btn left" onClick={prevSlide}>
        <ChevronRight size={24} strokeWidth={2} style={{ transform: 'rotate(180deg)' }} />
      </button>
      <div className="carousel-image"> 
        <img 
          src={images[current]}
          alt={`Slide ${current + 1}`}
          loading="lazy"
        />
      </div>
      <button className="carousel-btn right" onClick={nextSlide}>
        <ChevronRight size={24} strokeWidth={2} />
      </button>
    </div>
  );
};

export default Carousel;
