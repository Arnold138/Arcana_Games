import React from 'react';
import { motion } from 'framer-motion';
import '../../styles/button.scss';

/**
 * Composant Button réutilisable
 * @param {Object} props - Propriétés du bouton
 * @param {string} props.variant - Variante du bouton (primary, secondary, outline)
 * @param {string} props.size - Taille du bouton (sm, md, lg)
 * @param {boolean} props.disabled - État désactivé
 * @param {function} props.onClick - Fonction de clic
 * @param {ReactNode} props.children - Contenu du bouton
 * @param {string} props.className - Classes CSS supplémentaires
 */
const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  disabled = false, 
  onClick, 
  children, 
  className = '',
  ...props 
}) => {
  const buttonClasses = `
    button 
    button--${variant} 
    button--${size} 
    ${disabled ? 'button--disabled' : ''} 
    ${className}
  `.trim();

  return (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      {...props}
    >
      <span className="button__content">
        {children}
      </span>
      <div className="button__glow"></div>
    </motion.button>
  );
};

export default Button;