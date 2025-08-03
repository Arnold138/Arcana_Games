import React, { useState, useEffect } from "react";
import { ChevronRight } from 'lucide-react';
import '../../styles/carousel.scss';

// Supprimez tous ces imports car vous utilisez maintenant les props
// import slide1 from '../assets/carousel/1.webp';
// import slide2 from '../assets/carousel/2.webp';
// etc...

// Supprimez aussi ce tableau local
// const images = [slide1, slide2, slide3, ...];

const Carousel = ({ images }) => { 
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(interval);
    }, [images.length]); // Ajoutez images.length comme dépendance

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