import React,{use,useState, useEffect} from "react";
import {ChevronRight} from 'lucide-react';
import { transform } from "framer-motion";
import '../../styles/carousel.scss';

const Carousel = ({images}) => { 
    // on déclare l'état current pour savoir quelle image est affichée
    const [current, setCurrent] = useState(0);


    // Effet secondaire pour gérer le changement d'image
    useEffect(() => {

        // création d'un intervall pour changer l'index de chaque image affiché

        const interval = setInterval (() => {

            setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
            // si on est à la dernière image, on revient à la première
        }, 4000);
        
        // nettoyage de l'intervalle à la destruction du composant
        return () => clearInterval(interval);
    }, [images.length]);

    // fonction pour asser à l'image précédente 

    const prevSlide = () => {

        setCurrent(current === 0 ? images.length - 1 : current - 1);
         // si on est à la première image, on revient à la dernière
    };

    // fonction pour passer à l'image suivante

    const nextSlide = () => { 

        setCurrent(current === images.length - 1 ? 0 : current + 1);
        // son si on est à la dernière image, on revient à la première
    };

    return (
        <div className="carousel"> 
        <button className="carousel-btn left" onClick={prevSlide}>
            <ChevronRight size={24} strokeWidth={2} style={{ transform : 'rotate(180deg)' }} />
        </button>
        <div className="carousel-image"> 
        <img 
        src={images[current]} // afficage l'image actuelle courante
        alt={`Slide ${current}`}
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